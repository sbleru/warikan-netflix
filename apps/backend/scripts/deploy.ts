/**
 * Cloud functions deploy script
 *
 * Reference
 * https://techblog.sgr-ksmt.dev/2019/12/02/100337/
 */

import { argv } from "process";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";
import { program } from "commander";

type Options = {
  dryRun: boolean | undefined;
  env: "dev" | "prod";
  only: string[];
};

const commaSeparatedList = (value: string) => {
  return value.split(",");
};

/**
 * Setting options with the commander
 */
program.description("npm run deploy -w functions -- [options]");
program.option("-d, --dry-run", "Dry run");
program.option("-e, --env <type>", "Deployment target. Default is dev");
program.option(
  "-o, --only <comma separated function names>",
  "Deploy specific functions",
  /**
   * @see https://github.com/tj/commander.js/#custom-option-processing
   */
  commaSeparatedList
);
program.on("--help", () => {
  console.log(`
   Examples:
 
     Dry Run
     npm run deploy -- --dry-run
 
     Deploy to environment
     npm run deploy -- --env=dev
 
     Deploy to production
     npm run deploy -- --env=prod
 
     Deploy specific functions
     npm run deploy -- --dry-run --only hoge,fuga,piyo
   `);
});
program.parse(argv);

const getOptions = (): Options => {
  return program.opts() as Options;
};

const print = (message: string) => {
  console.log(`⚙️  ${message}`);
};

const execCommand = (command: string, dryRun = false) => {
  if (!dryRun) {
    execSync(command, { stdio: "inherit" });
  } else {
    print(`Dry-Run: ${command}`);
  }
};

const main = (options: Options) => {
  const isProdDeploy = options.env === "prod";
  const dryRun = options.dryRun;

  // Files under endpoints are files for function endpoints
  const dir = path.join(__dirname, "../src/endpoints");
  // Get the name of the function to be deployed
  const functionNames = fs
    .readdirSync(dir)
    // Get the function name from the file under endpoints. filename = function name
    .filter((name) => {
      // Exclude index.ts
      if (name === "index.ts") return false;
      const fullName = path.join(dir, name);
      const stats = fs.statSync(fullName);
      return stats.isFile();
    })
    // Remove an extension
    .map((name) => name.replace(/\.tsx?$/g, ""))
    // Specify function
    .filter((name) => {
      return options.only ? options.only.includes(name) : true;
    });

  // Build in the project to be deployed
  if (isProdDeploy) {
    execCommand(`firebase use prod`, dryRun);
  } else {
    execCommand(`firebase use dev`, dryRun);
  }

  // Deploy
  const deployFormat = `${functionNames
    .map((n) => `functions:${n}`)
    .join(",")}`;
  execCommand(`tsx scripts/predeploy.ts`, dryRun);
  execCommand(`firebase deploy --only ${deployFormat}`, dryRun);
  execCommand(`tsx scripts/postdeploy.ts`, dryRun);
};

main(getOptions());

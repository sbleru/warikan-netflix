import { execSync } from "child_process";

/**
 * Preparation before functions deploy.
 * When monorepo functions refer to monorepo internal package, functions cannot be deployed without modification.
 * Therefore, deploy is achieved with work-around support.
 * @see [Issue](https://github.com/firebase/firebase-tools/issues/653)
 *
 * Workaround reference
 * - https://github.com/firebase/firebase-tools/issues/653#issuecomment-1113650277
 * - https://github.com/cjmyles/firebase-monorepo/tree/yarn-pack#workaround
 */
export const predeploy = () => {
  console.log("predeploy started");

  /**
   * Build backend
   */
  execSync(`npm run build`);

  /**
   * Build some package if necessary
   */
  // execSync(`npm run build --prefix ../../packages/some-package`);

  /**
   * Pack monorepo internal package
   */
  execSync(`npm pack ../../packages/tsconfig`);

  /**
   * Replace monorepo internal packages with packed one.
   * This will install the internal packages in the backend app.
   *
   * Note
   * - sed -i ''
   * Replacement without backup in MacOS
   */
  execSync(
    `sed -i '' 's/"tsconfig": "^0.0.0",/"tsconfig": "file:.\\/tsconfig-0.0.0.tgz",/g' package.json`
  );

  console.log("predeploy finished");
};

predeploy();

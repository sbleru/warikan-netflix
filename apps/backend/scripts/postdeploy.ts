import { execSync } from "child_process";

/**
 * Clean up after functions deploy workaround process
 *
 * FIXME
 * - On CI, it may not work.
 */
export const postdeploy = () => {
  console.log("postdeploy started");

  /**
   * Revert changes in predeploy
   */
  execSync(`git checkout package.json`);

  /**
   * Delete pack files
   */
  execSync(`rm *.tgz`);

  console.log("postdeploy finished");
};

postdeploy();

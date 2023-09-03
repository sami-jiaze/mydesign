import { series } from 'gulp'
import { run, withTaskName } from './utils'
import delPath from './utils/delpath'
import { projectRoot } from './utils/path'

export const removeDist = () => {
  return delPath(`${projectRoot}/dist`)
}

export default series(
  // withTaskName("clean", async () => {
  //   console.log("clean");
  // }),
  withTaskName('clean', async () => removeDist()),
  withTaskName('buildPackages', async () => run('pnpm run --filter ./packages/* --parallel build'))
)

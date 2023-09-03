import type { App, Plugin } from 'vue'

// Icon.install = (app: App) => {
// 注册组件
//   app.component(Icon.name, Icon)
// }

// 类型必须导出否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}

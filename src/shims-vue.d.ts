/*
 * @Author: shiliangL
 * @Date: 2021-08-15 16:59:07
 * @LastEditTime: 2021-08-16 21:11:52
 * @LastEditors: Do not edit
 * @Description:
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {
  BMapGL: any;
}

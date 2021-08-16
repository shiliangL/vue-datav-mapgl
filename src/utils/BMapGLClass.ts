/*
 * @Author: shiliangL
 * @Date: 2021-08-02 11:00:27
 * @LastEditTime: 2021-08-16 21:23:39
 * @LastEditors: Do not edit
 * @Description: 百度地图常用工具类
 */
interface bmapOption {
  container:string
  centerName:string
}
export default class BMapGLClass {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private baiduMap:any;
  constructor(bmapOption:bmapOption) {
    this.baiduMap = this.initBaiduMap(bmapOption)
  }

  initBaiduMap(bmapOption:bmapOption):void {
    const { BMapGL } = window
    const baiduMap = new BMapGL.Map(bmapOption.container, {
      enableMapClick: false,
      minZoom: 12
    })
    baiduMap.centerAndZoom(bmapOption.centerName, 12)
    baiduMap.enableScrollWheelZoom()
    return baiduMap
  }
}

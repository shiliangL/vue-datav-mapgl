/*
 * @Author: shiliangL
 * @Date: 2021-08-02 11:00:27
 * @LastEditTime: 2021-08-15 18:57:04
 * @LastEditors: Do not edit
 * @Description: 百度地图常用工具类
 */

export default class BMapGLClass {
  private mapBetterView: [];
  private baiduMap:any;

  constructor(options:any) {
    this.mapBetterView = []
    this.baiduMap = options.baiduMap || BMapGLClass.initBaiduMap(options)
    if (options.centerName) this.getBoundaryPoint(options.centerName)
  }

  static initBaiduMap(option) {
    const { BMapGL } = window
    const options = Object.assign({}, option)
    const baiduMap = new BMapGL.Map(options.container, {
      enableMapClick: false,
      minZoom: 12
    })
    baiduMap.centerAndZoom(options.centerName, 12)
    baiduMap.enableScrollWheelZoom()
    return baiduMap
  }

  async getBoundaryPoint(centerName) {
    this.boundaryPoint = await this.fetchBoundary(centerName)
    this.mapBetterView = this.drawBoundaryPolygon(this.boundaryPoint || [])
  }

  getMapBetterView() {
    if (!this.mapBetterView.length) return
    return this.setViewport(this.mapBetterView)
  }

  fetchBoundary(centerName) {
    let paths = []
    const { BMapGL } = window
    const bd = new BMapGL.Boundary()
    return new Promise((resolve, reject) => {
      bd.get(centerName, data => {
        paths = data.boundaries.map(boundary => (boundary || []).split(';').map(point => (([lng, lat]) => ({ lng, lat }))(point.split(',').map(p => +p))))
        const points = []
        paths.forEach(item => {
          item.forEach(p => {
            points.push(new BMapGL.Point(p.lng, p.lat))
          })
        })
        return resolve(paths)
      })
    })
  }

  drawBoundaryPolygon(result = []) {
    const mapBetterView = []
    result.map(item => {
      const polygon = []
      item.forEach((item) => {
        polygon.push(new BMapGL.Point(item.lng, item.lat))
        mapBetterView.push(new BMapGL.Point(item.lng, item.lat))
      })
      const polygons = new BMapGL.Polygon(polygon, {
        enableMassClear: false,
        strokeColor: '#F56C6C',
        fillColor: '',
        strokeWeight: 2,
        strokeOpacity: 1,
        fillOpacity: 0,
        strokeStyle: 'solid'
      })
      polygons.THE_MAP_BORDER = true
      this.baiduMap && this.baiduMap.addOverlay(polygons)
    })
    this.baiduMap && this.baiduMap.setViewport(mapBetterView)
    return mapBetterView
  }

  setViewport(viewPoint) {
    return this.baiduMap && this.baiduMap.setViewport(viewPoint)
  }

  handlerPoint(result = [], lng = 'lng', lat = 'lat') {
    return result.map(kk => new BMapGL.Point(kk[lng], kk[lat])) || []
  }

  drawMapLine(result) {
    for (const item of result || []) {
      const linePoints = item.linePoints[0].map(kk => new BMapGL.Point(kk.lng, kk.lat))
      const polyline = new BMapGL.Polyline(linePoints, {
        strokeColor: 'RGB(0, 111, 255,0.88)',
        strokeWeight: 2
      })
      polyline.addEventListener('mouseover', function() {
        this.setStrokeWeight(3)
      })
      polyline.addEventListener('mouseout', function() {
        this.setStrokeWeight(2)
      })
      this.baiduMap.addOverlay(polyline)
    }
  }
}

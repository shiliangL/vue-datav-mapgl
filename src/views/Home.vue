<!--
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-10-13 23:26:01
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="layout">
    <header-bar title="智慧城市数据平台" />
    <div id="home" />
    <navigation-bar />
    <router-view class="transitionRouter" />
  </div>
</template>

<script>

import mapboxgl from 'mapbox-gl';
import setting from '@/setting';
import darkStyle from '@/utils/mapCubeStyle';
import GpsTracePlayer from '@/utils/GpsTracePlayer';
import components from '../components/index';

const { BMapGL, mapvgl } = window;

export default {
  name: 'Home',
  components: {
    HeaderBar: components.HeaderBar,
    NavigationBar: components.NavigationBar,
  },
  data() {
    return {
      mapTilt: 0,
      mapTypeStyle: setting.mapStyle,
    };
  },
  mounted() {
    this.$nextTick().then(() => {
      // eslint-disable-next-line no-unused-expressions
      this.mapTypeStyle === 'baidu' ? this.initBaiduMap() : this.initMapBox();
    });
  },
  methods: {
    initMap(domID, centerName, minZoom = 12) {
      // eslint-disable-next-line no-undef
      const map = new BMapGL.Map(domID, {
        style: { styleJson: darkStyle },
      });
      map.setMinZoom(minZoom);
      map.centerAndZoom(centerName, 12);
      map.enableScrollWheelZoom();
      map.disableDoubleClickZoom();
      map.enableDragging();
      map.setHeading(0);
      map.setTilt(32);
      map.setDisplayOptions({ poiText: false });
      map.setDisplayOptions({ poiIcon: false });
      map.setDisplayOptions({ skyColors: ['rgba(200, 54, 54, 0)', 'rgba(200, 54, 54, 0)'] });
      return map;
    },
    initMapBox() {
      mapboxgl.accessToken = 'pk.eyJ1IjoicGxheS1pc2FhYyIsImEiOiJjazU0cDkzbWowamd2M2dtemd4bW9mbzRhIn0.cxD4Fw3ZPB_taMkyUSFENA';
      const map = new mapboxgl.Map({
        container: 'home', // container id 绑定的组件的id
        // style: 'mapbox://styles/mapbox/streets-v11', // 地图样式，可以使用官网预定义的样式,也可以自定义
        style: 'mapbox://styles/mapbox/outdoors-v9?optimize=true', // optimize=true
        center: [118.726533, 32.012005], // 初始坐标系
        zoom: 15, // starting zoom 地图初始的拉伸比例
        pitch: 60, // 地图的角度，不写默认是0，取值是0-60度，一般在3D中使用
        bearing: -17.6, // 地图的初始方向，值是北的逆时针度数，默认是0，即是正北
        antialias: true, // 抗锯齿，通过false关闭提升性能
      });
      this.map = map;
    },
    initBaiduMap() {
      if (BMapGL) {
        this.map = this.initMap('home', '广东省深圳市', 12);
        this.generateDistrictBoundary(this.map, '广东省深圳市', {
          strokeStyle: 'solid',
          strokeColor: '#6AC3EB',
          fillColor: '#4b93ff',
          fillOpacity: 0.1,
          strokeWeight: 2,
          strokeOpacity: 1,
        });
        setTimeout(() => {
          // this.mapViewAnimation(this.map);
          // this.initGpsTrace();
          if (this.map) return;
          const view = new mapvgl.View({
            map: this.map,
          });

          fetch('/mock/chinalocation.json').then((rs) => rs.json()).then((rs) => {
            const data1 = [];
            const data2 = [];
            const data3 = [];
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < rs[0].length; i++) {
              const { geoCoord } = rs[0][i];
              data1.push({
                geometry: {
                  type: 'Point',
                  coordinates: geoCoord,
                },
                properties: {
                  time: Math.random() * 1000,
                },
              });
            }
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < rs[1].length; i++) {
              const { geoCoord } = rs[1][i];
              data2.push({
                geometry: {
                  type: 'Point',
                  coordinates: geoCoord,
                },
                properties: {
                  time: Math.random() * 1000,
                },
              });
            }
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < rs[2].length; i++) {
              const { geoCoord } = rs[2][i];
              data3.push({
                geometry: {
                  type: 'Point',
                  coordinates: geoCoord,
                },
                properties: {
                  time: Math.random() * 1000,
                },
              });
            }

            view.addLayer(new mapvgl.PointLayer({
              blend: 'lighter',
              shape: 'circle',
              color: 'rgba(255, 77, 77, 0.8)', // 点图层1颜色
              data: data1,
              size: 2,
            }));

            view.addLayer(new mapvgl.PointLayer({
              blend: 'lighter',
              shape: 'circle',
              color: 'rgba(255, 204, 0, 0.6)', // 点图层2颜色
              data: data2,
              size: 2,
            }));

            view.addLayer(new mapvgl.PointLayer({
              blend: 'lighter',
              shape: 'circle',
              color: 'rgba(255, 255, 0, 0.6)', // 点图层3颜色
              data: data3,
              size: 2,
            }));

            view.addLayer(new mapvgl.PointTripLayer({
              blend: 'lighter',
              shape: 'circle',
              startTime: 0,
              endTime: 100,
              step: 0.1,
              trailLength: 10,
              color: 'rgba(255, 255, 153, 0.5)', // 点动画图层颜色
              data: data1,
              size: 2,
            }));
          });
        }, 1200);
      }
    },
    // 自定义边界绘制
    generateBoundary(mapInstance, points, style) {
      const polygon = new BMapGL.Polygon(points, style);
      mapInstance.addOverlay(polygon);
      return polygon;
    },
    // 行政区域边界绘制
    generateDistrictBoundary(mapInstance, districtName, style) {
      const bdary = new BMapGL.Boundary();
      bdary.get(districtName, (res) => {
        const { boundaries } = res;
        let points = [];
        // 区划会分为多块，所以需要遍历生成
        boundaries.forEach((boundary) => {
          const polygon = this.generateBoundary(mapInstance, boundary, style);
          const path = polygon.getPath();
          points = points.concat(path);
        });
      });
    },
    mapViewAnimation(map) {
      const opts = {
        duration: 36000,
        delay: 5000,
        interation: 'INFINITE' || 1,
      };
      const keyFrames = [
        {
          center: new BMapGL.Point(116.307092, 40.054922),
          zoom: 20,
          tilt: 50,
          heading: 0,
          percentage: 0,
        },
        {
          center: new BMapGL.Point(116.307631, 40.055391),
          zoom: 21,
          tilt: 70,
          heading: 0,
          percentage: 0.1,
        },
        {
          center: new BMapGL.Point(116.306858, 40.057887),
          zoom: 21,
          tilt: 70,
          heading: 0,
          percentage: 0.25,
        },
        {
          center: new BMapGL.Point(116.306858, 40.057887),
          zoom: 21,
          tilt: 70,
          heading: -90,
          percentage: 0.35,
        },
        {
          center: new BMapGL.Point(116.307904, 40.058118),
          zoom: 21,
          tilt: 70,
          heading: -90,
          percentage: 0.45,
        },
        {
          center: new BMapGL.Point(116.307904, 40.058118),
          zoom: 21,
          tilt: 70,
          heading: -180,
          percentage: 0.55,
        },
        {
          center: new BMapGL.Point(116.308902, 40.055954),
          zoom: 21,
          tilt: 70,
          heading: -180,
          percentage: 0.75,
        },
        {
          center: new BMapGL.Point(116.308902, 40.055954),
          zoom: 21,
          tilt: 70,
          heading: -270,
          percentage: 0.85,
        },
        {
          center: new BMapGL.Point(116.307779, 40.055754),
          zoom: 21,
          tilt: 70,
          heading: -360,
          percentage: 0.95,
        },
        {
          center: new BMapGL.Point(116.307092, 40.054922),
          zoom: 20,
          tilt: 50,
          heading: -360,
          percentage: 1,
        },
      ];
      // eslint-disable-next-line no-restricted-syntax
      // for (const item of keyFrames) {
      //   const marker = new BMapGL.Marker(item.center);
      //   map.addOverlay(marker);
      // }
      // 声明动画对象
      const animation = new BMapGL.ViewAnimation(keyFrames, opts);
      // 监听事件
      animation.addEventListener('animationstart', (e) => {
        // eslint-disable-next-line no-console
        console.log(e, 'start');
      });
      animation.addEventListener('animationiterations', (e) => {
        // eslint-disable-next-line no-console
        console.log(e, 'onanimationiterations');
      });
      animation.addEventListener('animationend', (e) => {
        // eslint-disable-next-line no-console
        console.log(e, 'end');
        map.cancelViewAnimation(animation);
      });
      // 开始播放动画
      map.startViewAnimation(animation);
    },
    initDarw() {
      const list = [];
      let randomCount = 100;
      // eslint-disable-next-line no-plusplus
      while (randomCount--) {
        const cityCenter = { lng: 113.936577, lat: 22.545518 };
        const random = [cityCenter.lng + Math.random() * 0.4, cityCenter.lat + Math.random() * 0.4];
        list.push({
          geometry: {
            type: 'Point',
            coordinates: random,
          },
          properties: {
            count: Math.random() * 40,
          },
        });
      }
      // 创建 MapVGL图层
      const view = new mapvgl.View({
        map: this.map,
      });
      // 创建 可视化图层
      const pointLayer = new mapvgl.PointLayer({
        blend: 'lighter',
        size(item) {
          return item.properties.count;
        },
        color: 'rgba(89, 0, 179,0.86)',
      });
      // 创建 MapVGL中Add可视化图层
      view.addLayer(pointLayer);
      // 可视化图层设置数据
      pointLayer.setData(list);
    },
    // 初始化播放轨迹
    initGpsTrace() {
      this.gpsPlayer = new GpsTracePlayer(this.map, {
        requestUrl: '/gpsTrace/getGpsTrace',
        stopPlayTips: () => {

        },
        playingHandler: () => {
        },
        playPauseHandler: () => {
        },
        playStopHandler: () => {
          this.status = 0;
        },
        errorHandler: (error) => {
          this.$message(error);
        },
        noPointHandler: () => {
          this.status = 0;
          // eslint-disable-next-line no-console
          console.log('该时间段内没有查找到轨迹。');
        },
        afterMovePositionHandler: () => {

        },
        requestDataSuccessHandler: () => {

        },
      });
      this.gpsPlayer.start();
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #060b14;
  #home {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
    position: relative;
    position: absolute;
    background: #060b14;
  }
  .map-select {
    top: 40px;
    z-index: 2;
    position: fixed;
    right: $map-sider-bar-width;
  }
}
</style>

<!--
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-06-15 21:55:31
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="layout">
    <header-bar />
    <div id="home" />
    <navigation-bar />
    <!-- <transition name="transitionLeft"> -->
    <router-view class="transitionRouter" />
    <!-- </transition> -->
  </div>
</template>

<script>

import darkStyle from '@/utils/mapStyle';
import components from '../components/index';

const { BMapGL, mapvgl } = window;

export default {
  name: 'Home',
  components: {
    // SelectBar: components.SelectBar,
    HeaderBar: components.HeaderBar,
    NavigationBar: components.NavigationBar,
  },
  mounted() {
    this.$nextTick().then(() => {
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
        this.initDarw();
      }
    });
    fetch('/static/mock.json', {
      method: 'get',
    }).then((data) => data.json()).then((result) => {
      // eslint-disable-next-line no-console
      console.log(result);
    });
  },
  methods: {
    initMap(domID, centerPoint, minZoom = 12) {
      // eslint-disable-next-line no-undef
      const map = new BMapGL.Map(domID, {
        style: { styleJson: darkStyle },
      });
      map.centerAndZoom(centerPoint, 12);
      map.enableScrollWheelZoom();
      map.enableDragging();
      map.disableDoubleClickZoom();
      map.setMinZoom(minZoom);
      map.setHeading(0);
      map.setTilt(45);
      return map;
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

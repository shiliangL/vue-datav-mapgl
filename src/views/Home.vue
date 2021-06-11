<!--
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-06-11 14:27:57
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="layout">
    <header-bar />
    <div id="home" />
    <navigation-bar />
    <transition
      enter-active-class="animate__animated animate__fadeInLeft"
      leave-active-class="animate__animated animate__fadeInRight"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>

import darkStyle from '@/utils/mapStyle';
import components from '../components/index';

const { BMapGL } = window;

export default {
  name: 'Home',
  components: {
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
      }
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
      map.setTilt(84.5);
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
}
</style>

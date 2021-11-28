<!--
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-11-28 08:51:04
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="layout">
    <header-bar title="智慧城市数据平台" />
    <div id="home" />
    <cube-time></cube-time>
    <navigation-bar />
    <router-view class="transitionRouter" />
  </div>
</template>

<script>

import setting from '@/setting';
import components from '../components/index';

export default {
  name: 'Home',
  components: {
    CubeTime: components.CubeTime,
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
      this.initMapboxgl();
    });
  },
  methods: {
    initMapboxgl() {
      const { mapboxgl } = window;
      if (!mapboxgl) return;
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpbGlhbmdsIiwiYSI6ImNrdG5wbjdjODA1NGkzMW8zZ2w5b2xzNTgifQ.zO_1f362AFeSWsrmE6I-Ww';
      this.map = new mapboxgl.Map({
        container: this.$el.querySelector('#home'),
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [114.185125079355, 22.6322002129776],
        zoom: 10,
        maxzoom: 10,
        minzoom: 12,
        pitch: 45,
      });
      const { map } = this;
      map.on('load', () => {
        this.fetchLine(map);
        this.initLayout(this.map);
      });
    },
    rotateCamera(timestamp) {
      // eslint-disable-next-line no-shadow
      const { map } = this;
      // clamp the rotation between 0 -360 degrees
      // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
      map.rotateTo((timestamp / 500) % 360, { duration: 0 });
      // Request the next frame of the animation.
      requestAnimationFrame(this.rotateCamera);
    },
    initLayout(map) {
      const { layers } = map.getStyle();
      // eslint-disable-next-line no-restricted-syntax
      for (const layer of layers) {
        if (layer.type === 'symbol' && layer.layout['text-field']) {
          map.removeLayer(layer.id);
        }
      }

      map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 12,
        paint: {
          'fill-extrusion-color': '#aaa',
          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height'],
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height'],
          ],
          'fill-extrusion-opacity': 0.6,
        },
      });
    },
    fetchLine(map) {
      this.InitLayer(map);
      fetch('/mock/mapline.json', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((value) => value.json()).then((data) => {
        // Add a data source containing GeoJSON data.
        map.addSource('maine', {
          type: 'geojson',
          data,
        });

        const textPoints = {
          type: 'FeatureCollection',
          features: [],
        };

        data.features.forEach((item) => {
          textPoints.features.push({
            type: 'Feature',
            properties: { ...item.properties },
            geometry: {
              type: 'Points',
              coordinates: item.properties.center,
            },
          });
        });

        map.addSource('textPoints', {
          type: 'geojson',
          data: textPoints,
        });

        // this.map.addLayer({
        //   id: 'textPoints',
        //   type: 'symbol',
        //   source: 'textPoints',
        //   layout: {
        //     // 'text-size': 20,
        //   },
        //   paint: {

        //   },
        // });

        // Add a new layer to visualize the polygon.
        map.addLayer({
          id: 'maine',
          type: 'fill',
          source: 'maine', // reference the data source
          layout: {},
          paint: {
            // 'fill-color': {
            //   property: 'fillColor', // this will be your density property form you geojson
            //   stops: [
            //     [0, '#ffd0a6'],
            //     [10, '#ffd0a6'],
            //     [100, '#ffaa7f'],
            //     [500, '#ff704e'],
            //     [1000, '#f04040'],
            //     [10000, '#b50a09'],
            //   ],
            // },
            // 'fill-color': [
            //   'match', ['get', 'fillColor'],
            //   '1', '#cece23',
            //   '2', '#c98c98',
            //   '#ee34e6',
            // ],
            'fill-opacity': 0.66,
            'fill-color': 'RGBA(39, 73, 126,0)', // blue color fill
            // 'fill-opacity': 0.66,
          },
        });
        // Add a black outline around the polygon.
        map.addLayer({
          id: 'outline',
          type: 'line',
          source: 'maine',
          layout: {},
          paint: {
            'line-color': 'RGBA(70, 242, 253, 1.00)',
            'line-width': 1,
          },
        });
      });
    },
    /**
 * 同一图层layer的不同要素feature设置不同的颜色
 * InitLayer 构造函数
 * mapbox初始化地图
 */
    InitLayer(map) {
      this.map = map;
      this.jsonPoints = {
        type: 'FeatureCollection',
        features: [],
      };
      this.jsonLine = {
        type: 'FeatureCollection',
        features: [],
      };
      this.jsonFill = {
        type: 'FeatureCollection',
        features: [],
      };
      this.addPointsLayer();
      this.addLineLayer();
      this.addFillLayer();
    },
    /**
     * 添加点图层 paint是layer的一个属性，负责图层的渲染与呈现。
     * match通常用于枚举型的字段渲染，如唯一值渲染。
     * addPointLayer 方法名
     */
    addPointsLayer() {
      this.jsonPoints.features.push(
        {
          type: 'Feature',
          properties: {
            id: 1, name: '张三', age: 23, color: 1,
          },
          geometry: {
            type: 'Points',
            coordinates: [121.6604, 31.3245],
          },
        },
        {
          type: 'Features',
          properties: {
            id: 2, name: '菜霸', age: 22, color: 2,
          },
          geometry: {
            type: 'Points', // 点
            coordinates: [121.647104, 31.332030],
          },
        },
      );
      this.map.addSource('points_', {
        type: 'geojson',
        data: this.jsonPoints,
      });
      this.map.addLayer({
        id: 'points_',
        type: 'circle',
        source: 'points_',
        paint: {
          'circle-color': [
            'match', ['get', 'color'],
            '1', '#ff4895',
            '2', '#ccff12',
            '#cf45cf',
          ],
          'circle-radius': 5,
          'circle-stroke-width': 2,
        },

      });
    },
    addLineLayer() {
      this.jsonLine.features.push(
        {
          type: 'Feature',
          properties: {
            id: 3, name: '王六', age: 23, lineColor: 1,
          },
          geometry: {
            type: 'LineString',
            coordinates: [[121.6604, 31.3245], [121.66232, 31.3256], [121.66456, 31.327834], [121.6712324, 31.332312]],
          },
        },
        {
          type: 'Feature',
          properties: {
            id: 4, name: '小李', age: 23, lineColor: 2,
          },
          geometry: {
            type: 'LineString', // 线
            coordinates: [[122.6604, 32.3245], [122.66232, 32.3256], [122.66456, 32.3278], [122.6712324, 32.332312]],
          },
        },
      );
      this.map.addSource('line_', {
        type: 'geojson',
        data: this.jsonLine,
      });
      this.map.addLayer({
        id: 'line_',
        type: 'line',
        source: 'line_',
        // 描边
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
        paint: {
          'line-color': [
            'match'['get', 'lineColor'],
            '1', '#cece23',
            '2', '#c98c98',
            '#ee34e6',
          ],
          'line-width': 2,
          'line-opacity': 0.5,
          'line-dasharray': [1, 2],
        },
      });
    },
    addFillLayer() {
      this.jsonFill.features.push(
        {
          type: 'Feature',
          properties: {
            id: 5, name: '小八', age: 23, fillColor: 1,
          },
          geometry: {
            type: 'Polygon', // 面
            coordinates: [[[121.6604, 31.3245], [121.66232, 31.3256], [121.66456, 31.327834], [121.6712324, 31.332312]]],
          },
        },
        {
          type: 'Feature',
          properties: {
            id: 6, name: '小五', age: 23, fillColor: 2,
          },
          geometry: {
            type: 'Polygon', // 面
            coordinates: [[[122.6604, 32.3245], [122.66232, 32.3256], [122.66456, 32.3278], [122.6712324, 32.332312]]],
          },
        },
      );
      this.map.addSource('fill_', {
        type: 'geojson',
        data: this.jsonFill,
      });
      this.map.addLayer({
        id: 'fill_',
        type: 'fill',
        source: 'fill_',
        layout: {},
        paint: {
          'fill-color': [
            'match', ['get', 'fillColor'],
            '1', '#cece23',
            '2', '#c98c98',
            '#ee34e6',
          ],
          'fill-opacity': 0.5,
        },
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
  .map-select {
    top: 40px;
    z-index: 2;
    position: fixed;
    right: $map-sider-bar-width;
  }
}
</style>

<!--
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-11-27 20:37:13
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

<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-11-27 18:54:34
 * @LastEditors: Do not edit
 * @Description: 车辆安全预警监控 TheVehicleWarning
-->
<template>
  <div class="page-content">
    <MapSiderBar placement="left">
      <TitleBar title="人员安全预警监控">
        <div class="flex-box">
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
        </div>
      </TitleBar>
      <TitleBar title="人员概况">
        <div
          class="flex-box"
          v-for="kk in 4"
          :key="kk"
        >
          <div class="flex-box-line-row">
            <div class="flex-box-item-line flex-box">
              <div class="title"> 本地人口 </div>
              <div class="title">
                <span class="number"> 2356 </span> 人
              </div>
              <div class="number"> 23% </div>
            </div>
            <div class="flex-box-item-line flex-box">
              <div class="title"> 外来人口 </div>
              <div class="title">
                <span class="number"> 2356 </span> 人
              </div>
              <div class="number"> 23% </div>
            </div>
          </div>
        </div>
      </TitleBar>
      <TitleBar title="人员分析">
        <PieChart :option="lineOption" />
      </TitleBar>
    </MapSiderBar>

    <MapSiderBar placement="right">
      <TitleBar title="人员安全预警监控">
        <div class="flex-box">
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
        </div>
      </TitleBar>
      <TitleBar title="人员安全预警监控">
        <div class="flex-box">
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 2356 </div>
            <div class="title"> 人流量统计 </div>
          </div>
        </div>
      </TitleBar>
      <TitleBar title="趋势统计">
        <ScrollNumber :num="scrollNumber"></ScrollNumber>
        <!-- <PieChart :option="barOption" /> -->
      </TitleBar>
    </MapSiderBar>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import components from '@/components/index';
import PieChart from '@/components/CuebChart/PieChart.vue';
import { lineOption, barOption } from '@/utils/chartOpiton';

export default {
  name: 'ThePeopleWarning',
  components: {
    PieChart,
    TitleBar: components.TitleBar,
    ScrollNumber: components.ScrollNumber,
    MapSiderBar: components.MapSiderBar,
  },
  data() {
    return {
      scrollNumber: 200,
      lineOption: lineOption(),
      barOption: barOption(),
    };
  },
  mounted() {
    this.$nextTick().then(() => {
      setInterval(() => {
        this.scrollNumber += 1;
      }, 1200);
    });
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.flex-box {
  font-size: 12px;
  .flex-box-item {
    text-align: center;
  }
}
</style>

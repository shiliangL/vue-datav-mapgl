<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-09-14 08:53:32
 * @LastEditors: Do not edit
 * @Description: 综合安全管理监控 SafetyWarning
-->
<template>
  <div class="page-content">
    <MapSiderBar placement="left">
      <TitleBar title="人员安全预警监控">
        <div class="div">
          <PieChart :option="LineAssignmentLv(trafficSitua)" />
        </div>
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
        <PieChart :option="pieOption" />
      </TitleBar>
    </MapSiderBar>

    <MapSiderBar placement="right">
      <TitleBar title="人员安全预警监控">
        <div>
          <PieChart :option="OfflinePortalOptions(offlinePortalData)" />
        </div>
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
        <PieChart :option="barOption" />
      </TitleBar>
    </MapSiderBar>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import components from '@/components/index';
import PieChart from '@/components/CuebChart/PieChart.vue';
import {
  lineOption, barOption, pieOption, LineAssignmentLv, OfflinePortalOptions,
} from '@/utils/chartOpiton';

export default {
  name: 'ThePeopleWarning',
  components: {
    PieChart,
    TitleBar: components.TitleBar,
    MapSiderBar: components.MapSiderBar,
  },
  data() {
    return {
      pieOption: pieOption(),
      lineOption: lineOption(),
      barOption: barOption(),
      trafficSitua: {
        timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
        outData: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
        inData: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
      },
      offlinePortalData: {
        data1: [80, 152, 101, 134, 90, 130],
        data2: [120, 182, 191, 210, 170, 110],
        data3: [110, 132, 201, 154, 150, 80],
        data4: [90, 142, 161, 114, 190, 170],
        xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
        barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
      },
    };
  },
  mounted() {
    this.$nextTick().then(() => {

    });
  },
  methods: {
    LineAssignmentLv,
    OfflinePortalOptions,
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

<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-09-17 18:31:54
 * @LastEditors: Do not edit
 * @Description: 预警告警处置 EarlyWarning
-->
<template>
  <div class="page-content">
    <MapSiderBar placement="left">
      <TitleBar title="人员安全预警监控">
        <div class="cube-card-list">
          <div
            class='cube-card-list-item'
            v-for="(item,index) in cubeCards"
            :key="index"
          >
            <img :src="require(`@/assets/images/center-details-data${index + 1}.png`)" />
            <div class='detail-item-text'>
              <div class="h3">{{item.title}}</div>
              <span class="number">{{item.number}}</span>
              <span class='unit'>{{item.unit}}</span>
            </div>
          </div>
        </div>
      </TitleBar>
      <TitleBar title="人员概况">
        <div class="cube-card-list">
          <div
            class='cube-card-list-item-column'
            v-for="(item,index) in feedback"
            :key="index"
          >
            <PieChart :option="FeedbackOptions(item)" />
            <span class='cube-span'>{{item.title}}</span>
          </div>
        </div>
      </TitleBar>
      <TitleBar title="人员分析">
        <PieChart :option="pieOption" />
      </TitleBar>
    </MapSiderBar>

    <MapSiderBar placement="right">
      <TitleBar title="人员安全预警监控">
        <PieChart :option="RadarOption(radarCategories)" />
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
  lineOption, barOption, pieOption, FeedbackOptions, RadarOption,
} from '@/utils/chartOpiton';

import cubeCards from '@/mock/cubeCards';

export default {
  name: 'ThePeopleWarning',
  components: {
    PieChart,
    TitleBar: components.TitleBar,
    MapSiderBar: components.MapSiderBar,
  },
  data() {
    return {
      cubeCards,
      feedback: [
        {
          title: '服务质量',
          number: 90,
        },
        {
          title: '交互体验',
          number: 82,
        },
        {
          title: '安全防护',
          number: 85,
        },
      ],
      radarCategories: {
        data: [782, 621.2, 322.1, 525.3, 265, 224],
        indicator: [
          {
            name: '食物',
            max: 1000,
          },
          {
            name: '娱乐',
            max: 1000,
          },
          {
            name: '运动',
            max: 1000,
          },
          {
            name: '家居',
            max: 1000,
          },
          {
            name: '机械',
            max: 1000,
          },
          {
            name: '学习',
            max: 1000,
          },
        ],
      },
      pieOption: pieOption(),
      lineOption: lineOption(),
      barOption: barOption(),
    };
  },
  mounted() {
    this.$nextTick().then(() => {

    });
  },
  methods: {
    RadarOption,
    FeedbackOptions,
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

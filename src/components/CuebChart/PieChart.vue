<!--
 * @Author: shiliangL
 * @Date: 2021-06-12 16:39:50
 * @LastEditTime: 2021-06-12 17:27:53
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <v-chart autoresize class="chart" :option="lineOption" />
</template>

<script>

import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart, PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, GridComponent } from 'echarts/components';

import VChart, { THEME_KEY } from 'vue-echarts';

use([
  PieChart,
  BarChart,
  LineChart,
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: 'PieChart',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'dark',
  },
  data() {
    return {
      option: {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          left: 'center',
          data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
        },
        series: [
          {
            name: 'Traffic Sources',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 6,
              borderColor: '#fff',
              borderWidth: 1,
            },
            label: {
              show: false,
              position: 'center',
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 234, name: 'Ad Networks' },
              { value: 135, name: 'Video Ads' },
              { value: 1548, name: 'Search Engines' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
      lineOption: {
        backgroundColor: 'transparent',
        tooltip: {
          formatter: '{a}: <br/>{b} : {c}%',
          axisPointer: {
            lineStyle: {
              color: '#029aab',
            },
          },
          trigger: 'axis',
          backgroundColor: 'rgba(9,38,106,0.5)',
          borderWidth: 1,
          borderColor: '#00F5FF',
        },
        grid: {
          top: '10%',
          left: '6%',
          right: '12%',
          bottom: '6%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.28)',
              },
            },
            boundaryGap: false,
            data: [8.1, 8.3, 8.4, 8.5, 8.6, 8.7],
            axisLabel: {
              textStyle: {
                color: '#FFFFFF',
                fontSize: '16',
              },
            },
            axisTick: {
              show: true,
              inside: true,
              lineStyle: {
                color: '#fff',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            max: 100,
            interval: 25,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              formatter: '{value} %',
              show: true,
              textStyle: {
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14',
              },
            },
          },
        ],
        series: [
          {
            name: '在线趋势',
            type: 'line',
            smooth: true,
            showSymbol: true,
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(55, 242, 255, 0.5)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(55, 242, 255, 0)', // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
            lineStyle: {
              color: 'rgb(55, 242, 255)',
            },
            itemStyle: {
              borderColor: 'rgb(55, 242, 255)',
              borderWidth: 3,
            },
            label: {
              show: true,
              distance: 10,
              color: '#bae0fd',
              formatter: '{c} %',
            },
            areaStyle: {},
            data: [56, 66, 55, 83, 22, 32, 92],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 230px;
}
</style>

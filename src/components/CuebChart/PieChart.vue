<!--
 * @Author: shiliangL
 * @Date: 2021-06-12 16:39:50
 * @LastEditTime: 2021-10-23 11:54:50
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <v-chart
    autoresize
    class="chart"
    :option="option || barOption"
  />
</template>

<script>

import { px2rem } from '@/utils/rem';
import { use } from 'echarts/core';
import VChart, { THEME_KEY } from 'vue-echarts';
import { CanvasRenderer } from 'echarts/renderers';
import {
  LineChart, BarChart, PieChart, RadarChart,
} from 'echarts/charts';

import {
  TooltipComponent, LegendComponent, GridComponent, TitleComponent, RadarComponent, PolarComponent,
} from 'echarts/components';

import 'echarts-liquidfill';

use([
  PieChart,
  BarChart,
  LineChart,
  RadarChart,
  PolarComponent,
  RadarComponent,
  TitleComponent,
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: 'PieChart',
  props: {
    option: {
      type: Object,
    },
  },
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'dark',
  },
  data() {
    return {
      pieOption: {
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
          left: '0%',
          right: '12%',
          bottom: '4%',
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
                fontSize: px2rem(12),
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
                fontSize: px2rem(12),
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
      barOption: {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          show: false,
          top: '2%',
          left: '14%',
          right: '4%',
          bottom: '12%',
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '姑苏区',
              '虎丘区',
              '吴中区',
              '相城区',
              '吴江区',
              '常熟市',
              '张家港市',
              '昆山市',
              '太仓市',
              '工业园区',
            ],
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
            axisLabel: {
              margin: 2,
              color: '#e2e9ff',
              textStyle: {
                fontSize: px2rem(12),
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false,
            },
            axisLabel: {
              formatter: '{value}',
              color: '#e2e9ff',
              textStyle: {
                fontSize: px2rem(12),
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,1)',
              },
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(255,255,255,0.12)',
              },
            },
          },
        ],
        series: [
          {
            type: 'bar',
            data: [4016, 3230, 3790, 3570, 5470, 2860, 4530, 3710, 3180, 3260],
            barWidth: '40px',
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
            label: {
              normal: {
                show: true,
                lineHeight: 30,
                width: 80,
                height: 30,
                backgroundColor: 'rgba(0,160,221,0.1)',
                borderRadius: 200,
                position: ['-10', '-24'],
                distance: 1,
                // eslint-disable-next-line no-useless-concat
                formatter: '{d|●}' + '{c} ',
                rich: {
                  d: {
                    color: '#3CDDCF',
                  },
                  a: {
                    color: '#fff',
                    align: 'center',
                  },
                },
              },
            },
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

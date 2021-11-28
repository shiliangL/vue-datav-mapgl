<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-11-27 21:50:11
 * @LastEditors: Do not edit
 * @Description: 预警告警处置 EarlyWarning
-->
<template>
  <div class="page-content">
    <MapSiderBar placement="left">
      <div class="container-3main-box">
        <TitleBar title="信息概况">
          <div class="cube-card-list">
            <div
              class='cube-card-list-item'
              v-for="(item,index) in cubeCards"
              :key="index"
            >
              <img :src="require(`@/assets/images/center-details-data${index + 1}.png`)" />
              <div class='detail-item-text'>
                <div class="h3">{{item.title}}</div>
                <div class="h50">
                  <span class="number">{{item.number}}</span>
                  <span class='unit'>{{item.unit}}</span>
                </div>
              </div>
            </div>
          </div>
        </TitleBar>
        <TitleBar title="趋势统计">
          <PieChart :option="lineOption" />
        </TitleBar>
        <TitleBar title="实现预警">
          <div
            :style="{height: scrollHeight + 'px' }"
            :data="listData"
            :class-option="defaultOption"
            class="scroll-content-warp"
          >
            <div class="scroll-content">
              <div
                class="scroll-content-item"
                v-for="(item, index) in listData"
                :key="index"
              >
                <div class="content-flex-bar arrow">
                  <div class="left">
                    <span
                      class="title"
                      v-text="item.title"
                    />
                    <span
                      class="date"
                      v-text="item.date"
                    />
                  </div>
                  <div
                    class="right"
                    :class="item.status?'normal':'warning'"
                  >
                    {{ item.status ? '已处理':'待处理'}}
                  </div>
                </div>
                <div
                  class="content-desc"
                  v-text="item.info"
                />
              </div>
            </div>
          </div>
        </TitleBar>
      </div>
    </MapSiderBar>

    <MapSiderBar placement="right">
      <div class="container-3main-box">
        <TitleBar title="管控概况">
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
        <TitleBar title="体验分析">
          <div class="cube-card-list-chart">
            <div
              class='cube-card-list-item-column'
              v-for="(item,index) in feedback"
              :key="index"
            >
              <PieChart :option="FeedbackOptions(item)" />
              <span class='cube-span feedback-options-item'>{{item.title}}</span>
            </div>
          </div>
        </TitleBar>
        <TitleBar title="综合排名">
          <PieChart :option="barOption" />
        </TitleBar>
      </div>
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
import VueScroll from 'vue-seamless-scroll';

export default {
  name: 'ThePeopleWarning',
  components: {
    PieChart,
    VueScroll,
    TitleBar: components.TitleBar,
    MapSiderBar: components.MapSiderBar,
  },
  computed: {
    defaultOption() {
      return {
        singleHeight: 36, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        waitTime: 1500, // 单步运动停止的时间(默认值1000ms)
        // step: 0.2, // 数值越大速度滚动越快
        // limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        // openWatch: true, // 开启数据实时监控刷新dom
        // singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
      };
    },
  },
  data() {
    return {
      cubeCards,
      lineOption: lineOption(),
      feedback: [
        {
          color1: '#43CBFF',
          color2: '#0396FF',
          title: '服务质量',
          number: 90,
        },
        {
          color1: '#43CBFF',
          color2: '#0396FF',
          title: '交互体验',
          number: 82,
        },
        {
          color1: '#43CBFF',
          color2: '#0396FF',
          title: '安全防护',
          number: 85,
        },
      ],
      scrollHeight: 'auto',
      listData: [
        {
          title: '人脸识别预警', date: '2017-12-16', status: 0, stautsDesc: '待处理', info: '智能检测人脸识,发现张xx在行政大楼异常徘徊！',
        },
        {
          title: '人员行为异常预警', date: '2017-12-16', status: 1, stautsDesc: '待处理', info: '智能检测人脸识,发现张xx在行政大楼异常徘徊！',
        },
        {
          title: '人员可疑行为预警', date: '2017-12-16', status: 0, stautsDesc: '待处理', info: '智能检测人脸识,发现张xx在行政大楼异常徘徊！',
        },
        {
          title: '人员行为异常预警', date: '2017-12-16', status: 0, stautsDesc: '待处理', info: '智能检测人脸识,发现张xx在行政大楼异常徘徊！',
        },
        {
          title: '人员可疑行为预警', date: '2017-12-16', status: 1, stautsDesc: '待处理', info: '智能检测人脸识,发现张xx在行政大楼异常徘徊！',
        },
        {
          title: '人员行为异常预警', date: '2017-12-16', status: 1, stautsDesc: '待处理', info: '智能检测人脸识,发现张xx在行政大楼异常徘徊！',
        },
        {
          title: '人脸识别预警', date: '2017-12-16', status: 1, stautsDesc: '待处理', info: '智能检测人脸识,发现张xx在行政大楼异常徘徊！',
        },
        {
          title: '人脸识别预警', date: '2017-12-16', status: 1, stautsDesc: '待处理', info: '智能检测人脸识,发现张xx在行政大楼异常徘徊！',
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

.feedback-options-item{
  // margin-top: -20px;
}

.cube-card-list-chart{
  display: flex;
  align-items: center;
}

.cube-card-list-item-column {
  overflow-y: auto;
}
.scroll-content-warp {
  margin: 6px 0;
  overflow: hidden;
  .scroll-content {
    font-size: 12px;
    .scroll-content-item {
      padding: 6px;
    }
    .content-flex-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left {
        flex: 1;
      }
      .right {
        color: #fff;
        padding: 2px 4px;
        &.normal {
          background: RGBA(0, 109, 161, 1);
        }
        &.warning {
          background: RGBA(188, 121, 4, 1);
        }
      }
      .title {
        font-size: 14px;
        color: RGBA(255, 255, 255, 1);
      }
      .date {
        padding-left: 4px;
      }
      .content-desc {
        margin-top: 8px;
      }
    }
  }
}
</style>

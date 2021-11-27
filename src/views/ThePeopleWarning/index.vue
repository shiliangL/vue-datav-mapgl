<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-11-27 00:58:29
 * @LastEditors: Do not edit
 * @Description: 人员安全预警监控 ThePeopleWarning
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
        <PieChart :option="barOption" />
      </TitleBar>
    </MapSiderBar>
    <div class="map-center-Bar">
      <!-- <div class="title"> 监测人数数量 </div> -->
    </div>
    <MapSiderBar placement="right">
      <TitleBar title="实时统计">
        <div class="flex-box">
          <div class="flex-box-item">
            <div class="flex-box text-center">
              <div class="title">
                <i class="remix ri-qr-scan-line"></i>
              </div>
              <div class="title-desc">
                <div class="number"> 2312 </div>
                <div class="title">
                  人员识别
                </div>
              </div>
            </div>
          </div>
          <div class="flex-box-item">
            <div class="flex-box text-center">
              <div class="title">
                <i class="remix ri-user-voice-line"></i>
              </div>
              <div class="title-desc">
                <div class="number"> 328 </div>
                <div class="title">
                  人员异常
                </div>
              </div>
            </div>
          </div>

        </div>
      </TitleBar>
      <TitleBar title="即时播报">
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
        <vue-scroll
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
              <span
                class="title"
                v-text="item.title"
              ></span>
              <span
                class="date"
                v-text="item.date"
              ></span>
            </div>
          </div>
        </vue-scroll>
      </TitleBar>
      <TitleBar title="趋势统计">
        <PieChart :option="lineOption" />
      </TitleBar>
    </MapSiderBar>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import components from '@/components/index';
import PieChart from '@/components/CuebChart/PieChart.vue';
import { lineOption, barOption, liquidFill } from '@/utils/chartOpiton';
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
      carNumber: 2321,
      lineOption: lineOption(),
      barOption: liquidFill() || barOption(),
      scrollHeight: 230,
      listData: [
        { title: '第一行', date: '2017-12-16' },
        { title: '第二行', date: '2017-12-16' },
        { title: '第三行', date: '2017-12-16' },
        { title: '第四行', date: '2017-12-16' },
        { title: '第五行', date: '2017-12-16' },
        { title: '第六行', date: '2017-12-16' },
        { title: '第七行', date: '2017-12-16' },
        { title: '第八行', date: '2017-12-16' }],
    };
  },
  mounted() {
    this.$nextTick().then(() => {
      setInterval(() => {
        // this.carNumber += 100;
      }, 5000);
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
.title-desc {
  margin-left: 4px;
}
.scroll-content-warp {
  margin: 6px 0;
  overflow: hidden;
  .scroll-content {
    font-size: 12px;
    .scroll-content-item {
      padding: 6px;
    }
  }
}
.map-center-Bar {
  z-index: 2;
  left: 50%;
  top: 60px;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, 0%);
  .title {
    font-size: 24px;
    color: $themeWhiteColoe;
  }
}
</style>

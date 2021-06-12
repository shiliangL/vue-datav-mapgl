<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-06-12 15:00:39
 * @LastEditors: Do not edit
 * @Description: 人员安全预警监控-->

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

        <div
          id="container"
          style="height: 300px"
        ></div>

        <div
          class="flex-box"
          v-for="kk in 4"
          :key="kk"
        >
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
    </MapSiderBar>

    <MapSiderBar placement="right">
      <TitleBar
        title="人员安全预警监控"
        v-for="kk in 4"
        :key="kk"
      >
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
    </MapSiderBar>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import components from '@/components/index';

export default {
  name: 'ThePeopleWarning',
  components: {
    TitleBar: components.TitleBar,
    MapSiderBar: components.MapSiderBar,
  },
  mounted() {
    this.$nextTick().then(() => {
      this.initEachart();
    });
  },
  methods: {
    initEachart() {
      const { echarts } = window;
      const dom = document.getElementById('container');
      const myChart = echarts.init(dom);
      const option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: [
              '40%', '70%',
            ],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 1,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
              { value: 300, name: '视频广告' },
            ],
          },
        ],
      };

      if (option && typeof option === 'object') {
        myChart.setOption(option);
      }
    },
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

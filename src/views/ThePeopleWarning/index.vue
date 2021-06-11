<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-06-11 15:51:11
 * @LastEditors: Do not edit
 * @Description: 人员安全预警监控-->

<template>
  <div class="page-content">
    <MapSiderBar placement="left">
      <TitleBar
        title="人员安全预警监控"
        v-for="kk in 4"
        :key="kk"
      >
        <div class="flex-box">
          <div class="flex-box-item">
            <div class="number"> 人流量统计 </div>
            <div class="title"> 3638 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 人流量统计 </div>
            <div class="title"> 3638 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 人流量统计 </div>
            <div class="title"> 3638 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 人流量统计 </div>
            <div class="title"> 3638 </div>
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
            <div class="number"> 人流量统计 </div>
            <div class="title"> 3638 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 人流量统计 </div>
            <div class="title"> 3638 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 人流量统计 </div>
            <div class="title"> 3638 </div>
          </div>
          <div class="flex-box-item">
            <div class="number"> 人流量统计 </div>
            <div class="title"> 3638 </div>
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

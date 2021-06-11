<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-06-11 14:01:44
 * @LastEditors: Do not edit
 * @Description: 车辆安全预警监控
-->
<template>
  <div class="page-content">
    <MapSiderBar placement="left">
      <TitleBar title="车辆安全预警监控" />
    </MapSiderBar>
    <MapSiderBar placement="right">
      <TitleBar title="车辆安全预警监控" />
    </MapSiderBar>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import components from '@/components/index';

export default {
  name: 'TheVehicleWarning',
  components: {
    TitleBar: components.TitleBar,
    MapSiderBar: components.MapSiderBar,
  },
};
</script>

<style lang="scss" scoped>
</style>

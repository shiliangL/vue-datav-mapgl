<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-06-11 13:55:34
 * @LastEditors: Do not edit
 * @Description: 综合安全管理监控
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
  name: 'SafetyWarning',
  components: {
    TitleBar: components.TitleBar,
    MapSiderBar: components.MapSiderBar,
  },
};
</script>

<style lang="scss" scoped>
</style>

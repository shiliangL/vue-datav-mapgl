<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 13:45:53
 * @LastEditTime: 2021-06-11 13:55:55
 * @LastEditors: Do not edit
 * @Description: 预警告警处置
-->
<template>
  <div class="page-content">
    <MapSiderBar placement="left">
      <TitleBar title="预警告警处置" />
    </MapSiderBar>
    <MapSiderBar placement="right">
      <TitleBar title="预警告警处置" />
    </MapSiderBar>
  </div>
</template>

<script>
// eslint-disable-next-line import/named
import components from '@/components/index';

export default {
  name: 'EarlyWarning',
  components: {
    TitleBar: components.TitleBar,
    MapSiderBar: components.MapSiderBar,
  },
};
</script>

<style lang="scss" scoped>
</style>

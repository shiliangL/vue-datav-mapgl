<!--
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-06-11 10:26:59
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="page-content">
    <MapSiderBar placement="left">
      <TitleBar></TitleBar>
    </MapSiderBar>
    <MapSiderBar placement="right">
      <TitleBar></TitleBar>
    </MapSiderBar>
  </div>
</template>

<script>

// eslint-disable-next-line import/named
import components from '../components/index';

export default {
  components: {
    TitleBar: components.TitleBar,
    MapSiderBar: components.MapSiderBar,
  },
};
</script>

<style lang="scss" scoped>

</style>

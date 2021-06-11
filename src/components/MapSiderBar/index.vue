<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:22:01
 * @LastEditTime: 2021-06-11 15:41:44
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div
    class="map-sider-bar-item"
    :class="placement"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MapSiderBar',
  props: {
    placement: {
      type: String,
      default: () => 'left',
    },
  },
};
</script>

<style lang="scss" scoped>
.map-sider-bar-item {
  z-index: 10;
  position: fixed;
  top: 30px;
  bottom: 20px;
  height: 90%;
  width: $map-sider-bar-width;
  padding: 10px;
}
.left {
  left: 10px;
}
.right {
  right: 10px;
}
</style>

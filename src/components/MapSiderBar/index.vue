<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:22:01
 * @LastEditTime: 2021-06-11 16:05:18
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
  top: 30px;
  height: 90%;
  z-index: 10;
  bottom: 20px;
  padding: 10px;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  width: $map-sider-bar-width;
}
.left {
  left: 10px;
}
.right {
  right: 10px;
}
</style>

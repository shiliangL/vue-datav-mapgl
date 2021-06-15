<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:22:01
 * @LastEditTime: 2021-06-12 22:39:46
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
  top: 40px;
  bottom: 20px;
  z-index: 10;
  height: 90%;
  padding: 10px;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  width: $map-sider-bar-width;
  background: rgba($color: #000000, $alpha: 0.66);
  // background-image: $base-black-gradient;
}
.left {
  left: 10px;
}
.right {
  right: 10px;
}
</style>

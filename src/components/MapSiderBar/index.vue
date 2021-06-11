<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:22:01
 * @LastEditTime: 2021-06-11 14:29:14
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
  width: 240px;
  padding: 10px;
  // background-image: linear-gradient( to right, rgb(50, 97, 168), rgba(21, 31, 46, 0) );
}
.left {
  left: 10px;
}
.right {
  right: 10px;
}
</style>

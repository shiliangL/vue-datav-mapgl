<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:22:01
 * @LastEditTime: 2021-06-11 10:08:37
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
  z-index: 2;
  position: fixed;
  top: 30px;
  bottom: 20px;
  height: 90%;
  width: 240px;
  padding: 10px;
  background: linear-gradient(rgba(48, 91, 161, 0.38) rgba(152, 190, 199, 0.1),);
}
.left {
  left: 10px;
}
.right {
  right: 10px;
}
</style>

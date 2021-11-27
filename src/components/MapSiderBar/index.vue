<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:22:01
 * @LastEditTime: 2021-11-27 00:42:46
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div :class="['map-sider-bar-item',placement]">
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
    animationTime: {
      type: Number,
      default: () => 0,
    },
  },
  mounted() {
    this.$nextTick().then(() => {
      const { $el, placement, animationTime } = this;
      if (placement === 'left') {
        $el.style.left = '-100%';
      } else {
        $el.style.right = '-100%';
      }
      setTimeout(() => {
        if (placement === 'left') {
          $el.style.left = '10px';
        } else {
          $el.style.right = '10px';
        }
      }, animationTime);
    });
  },
};
</script>

<style lang="scss" scoped>
.map-sider-bar-item {
  top: 50px;
  bottom: 30px;
  z-index: 10;
  padding: 0;
  height: 90%;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  width: 20%;
  // width: $map-sider-bar-width;
  transition: all 0.66s ease-out;
  // background: $base-black-gradient;
}
</style>

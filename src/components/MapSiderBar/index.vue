<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:22:01
 * @LastEditTime: 2021-06-15 09:18:04
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
  top: 40px;
  bottom: 20px;
  z-index: 10;
  height: 100%;
  padding: 10px;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  width: $map-sider-bar-width;
  transition: all 0.66s ease-out;
}
</style>

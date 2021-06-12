<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 08:51:53
 * @LastEditTime: 2021-06-12 10:58:58
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="TitleBar">
    <div
      class="title-line"
      :class="round?'round':''"
      v-text="title"
    >
    </div>
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    round: {
      type: Boolean,
      default: () => true,
    },
    title: {
      type: String,
      default: () => 'TitleBar',
    },
  },
};
</script>

<style lang="scss" scoped>
.title-line {
  font-size: 14px;
  font-weight: 600;
  color: #bad6f1;
  height: 32px;
  line-height: 32px;
  padding-left: 12px;
  margin-bottom: 4px;
  position: relative;
  background: transparent;
  background-image: $base-theme-gradient;
  &.round {
    border-radius: 22px 0 0 0;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 34px;
    width: 20px;
    height: 1px;
    background: #1d7ff5;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 20px;
    width: 10px;
    height: 1px;
    background: #1d7ff5;
  }
}
.inner {
  padding: 8px;
}
</style>

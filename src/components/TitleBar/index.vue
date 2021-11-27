<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 08:51:53
 * @LastEditTime: 2021-11-27 01:10:03
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="TitleBar">
    <div
      class="title-line"
      :class="round?'round':''"
    >
      <div class="line"></div>
      <span v-text="title"> </span>
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
.TitleBar {
  position: relative;
  background: $base-black-gradient;
}

.title-line {
  font-size: 14px;
  font-weight: 600;
  color: #bad6f1;
  height: 32px;
  padding-left: 14px;
  position: relative;
  background: transparent;
  display: flex;
  align-items: center;
  background-image: $base-theme-gradient;
  .line {
    left: 4px;
    width: 3px;
    height: 40%;
    position: absolute;
    background: #65d1df;
  }
  &.round {
    border-radius: 0 0 0 0;
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
  background: $base-theme2-gradient;
}
</style>

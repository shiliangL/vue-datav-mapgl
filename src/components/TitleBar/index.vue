<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 08:51:53
 * @LastEditTime: 2021-06-11 14:07:40
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div
    class="title-line"
    :class="round?'round':''"
  >
    {{ title }}
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
  color: #bad6f1;
  height: 24px;
  line-height: 24px;
  padding-left: 14px;
  position: relative;
  background: transparent;
  background-image: linear-gradient(
    to right,
    rgb(50, 97, 168),
    rgba(21, 31, 46, 0)
  );
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
</style>

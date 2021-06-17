<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 11:20:24
 * @LastEditTime: 2021-06-17 10:17:35
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="header">
    <h1
      v-if="title"
      class="header-title"
      v-text="title"
    ></h1>
    <NumberRoll v-if="0"></NumberRoll>
  </div>
</template>

<script>

import NumberRoll from '../NumberRoll/index.vue';

export default {
  name: 'HeaderBar',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
  components: {
    NumberRoll,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 70%;
  left: 50%;
  top: 0;
  z-index: 2;
  height: 54px;
  line-height: 54px;
  position: fixed;
  box-sizing: border-box;
  box-sizing: border-box;
  transform: translate(-50%, 0%);
  background: url("~@/assets/imgs/header_bar.png") no-repeat;
  background-size: cover;
}
.header-title {
  margin: 0;
  padding: 0;
  font-size: 26px;
  color: $themeWhiteColoe;
  font-weight: 400;
  text-align: center;
}
</style>

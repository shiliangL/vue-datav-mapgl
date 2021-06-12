<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 11:20:24
 * @LastEditTime: 2021-06-12 09:57:30
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="header">
    <h1
      class="header-title"
      v-text="title"
    ></h1>
  </div>
</template>

<script>

export default {
  name: 'HeaderBar',
  props: {
    title: {
      type: String,
      default: () => '智慧云平台',
    },
  },
};
</script>

<style lang="scss" scoped>

.header {
  z-index: 2;
  height: 40px;
  line-height: 40px;
  position: relative;
  box-sizing: border-box;
  box-sizing: border-box;
  background-size: 100% 100%;
  background: url("~@/assets/imgs/header_bar.png") no-repeat;
}
.header-title {
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: $themeWhiteColoe;
  font-weight: 400;
  text-align: center;
}
</style>

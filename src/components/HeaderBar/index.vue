<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 11:20:24
 * @LastEditTime: 2021-06-11 11:22:15
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
  position: relative;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  background: url("~@/assets/imgs/header_bar.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
}
.header-title {
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: #f6fafc;
  font-weight: 400;
  text-align: center;
}
</style>

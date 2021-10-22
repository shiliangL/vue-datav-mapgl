<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 11:20:24
 * @LastEditTime: 2021-10-10 07:25:59
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
  </div>
</template>

<script>

export default {
  name: 'HeaderBar',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
  components: {
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 70%;
  left: 50%;
  top: 0;
  z-index: 2;
  height: 60px;
  position: fixed;
  box-sizing: border-box;
  box-sizing: border-box;
  background: url("~@/assets/imgs/header_bar.png") no-repeat;
  background-size: cover;
  transform: translate(-50%, 0%);
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
.header-title {
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
  color: $themeWhiteColoe;
}
</style>

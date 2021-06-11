<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:32:18
 * @LastEditTime: 2021-06-11 10:33:11
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="NavigationBar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style lang="scss" scoped>
.NavigationBar {
  left: 0;
  bottom: 0;
  z-index: 2;
  position: fixed;
  width: 60%;
  background: #2B5296;
      background: rgba(46,91,162,0.33);
  transform: translate(-50%, 0%);
}
</style>

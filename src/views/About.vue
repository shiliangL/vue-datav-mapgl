<!--
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-06-11 08:41:24
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="map-sider-bar">
    <div class="map-sider-bar-item left">
      左边
    </div>
    <div class="map-sider-bar-item right">
      左边
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-sider-bar-item {
  z-index: 2;
  position: fixed;
  top: 30px;
  bottom: 20px;
  height: 90%;
  width: 240px;
  padding: 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.23);
  box-shadow: 0 0 3rem rgba(45, 89, 160, 0.78) inset;
}
.left {
  left: 10px;
}
.right {
  right: 10px;
}
</style>

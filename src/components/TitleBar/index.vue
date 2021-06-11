<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 08:51:53
 * @LastEditTime: 2021-06-11 10:09:22
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="title-line">
    example
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
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
  border-radius: 22px 0 0 0;
  background-image: linear-gradient(
    to right,
    rgba(21, 49, 86, 0.78),
    rgba(21, 31, 46, 0)
  );
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

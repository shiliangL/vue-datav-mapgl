<!--
 * @Author: shiliangL
 * @Date: 2021-06-17 09:41:54
 * @LastEditTime: 2021-06-17 09:44:51
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="BorderBox">
    <div class="tl" />
    <div class="tr" />
    <div class="bl" />
    <div class="br" />
    <div
      v-if="title"
      class="title"
      v-text="title"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BorderBox',
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
};
</script>

<style scoped lang="scss">
.BorderBox {
  padding: 20px;
  position: relative;
  background: rgba(10, 11, 26, 0.8);
  .tl {
    width: 31px;
    height: 31px;
    border: 2px solid rgba(92, 88, 221, 1);
    border-right: 0;
    border-bottom: 0;
    position: absolute;
    top: -1px;
    left: -1px;
  }
  .tr {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(92, 88, 221, 1);
    opacity: 1;
    border-left: 0;
    border-bottom: 0;
    position: absolute;
    right: -1px;
    top: -1px;
  }
  .bl {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(92, 88, 221, 1);
    opacity: 1;
    border-right: 0;
    border-top: 0;
    position: absolute;
    left: -1px;
    bottom: -1px;
  }
  .br {
    width: 31px;
    height: 31px;
    border: 2px solid rgba(92, 88, 221, 1);
    border-left: 0;
    border-top: 0;
    position: absolute;
    bottom: -1px;
    right: -1px;
  }
  .title {
    font-size: 20px;
    color: #a8adc9;
  }
}
</style>

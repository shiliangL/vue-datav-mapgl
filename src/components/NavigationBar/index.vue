<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:32:18
 * @LastEditTime: 2021-06-11 13:58:19
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="NavigationBar">
    <div class="NavigationBar-inner">
      <div
        class="NavigationBar-item"
        v-for="(item,index) in navigationList"
        :key="index"
      >
        <router-link
          :to="item.url"
          v-text="item.text"
        > </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      navigationList: [
        { text: '人员预警', url: '/thePeopleWarning' },
        { text: '车辆预警', url: '/theVehicleWarning' },
        { text: '综合监控', url: '/safetyWarning' },
        { text: '安全预警', url: '/earlyWarning' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.NavigationBar {
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 50%;
  padding: 4px;
  position: fixed;
  transform: translate(50%, 0%);
  background: rgba(46, 91, 162, 0.33);
  .NavigationBar-inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>

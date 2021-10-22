<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:32:18
 * @LastEditTime: 2021-10-22 20:51:23
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="NavigationBar">
    <div class="NavigationBar-inner">
      <router-link
        :to="item.url"
        class="router-link"
        v-for="(item,index) in navigationList"
        :key="index"
      >
        <div class="NavigationBar-item">
          <div class="active">
            <svg-icon :iconClass="item.iconClass" />
          </div>
          <div
            class="link-text"
            v-text="item.text"
          >
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      navigationList: [
        { iconClass: 'earlyWarning', text: '安全预警', url: '/earlyWarning' },
        { iconClass: 'thePeopleWarning', text: '人员预警', url: '/thePeopleWarning' },
        { iconClass: 'theVehicleWarning', text: '车辆预警', url: '/theVehicleWarning' },
        { iconClass: 'safetyWarning', text: '综合监控', url: '/safetyWarning' },
      ],
    };
  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
.NavigationBar {
  left: 50%;
  bottom: 0;
  z-index: 2;
  width: 20%;
  height: 80px;
  padding: 4px;
  position: fixed;
  user-select: none;
  transform: translate(-50%, 0%);
  // background: url("~@/assets/nav_bg.png") no-repeat;
  background-size: cover;
  .NavigationBar-item {
    display: flex;
    overflow: hidden;
    padding: 4px 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .NavigationBar-inner {
    position: absolute;
    width: 100%;
    bottom: 10px;

    display: flex;
    align-items: center;
    color: $themeWhiteColoe;
    justify-content: space-around;
  }

  .router-link {
    font-size: 12px;
    font-weight: 800;
    overflow: hidden;
    display: block;
    transition: all 0.32s ease-out;
    .active {
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.router-link-active {
      color: $themeColoe;
      .active {
        width: 42px;
        height: 42px;
        background: linear-gradient($themeColoe, $themeColoe) left top,
          linear-gradient($themeColoe, rgb(145, 145, 185)) left top,
          linear-gradient($themeColoe, $themeColoe) right top,
          linear-gradient($themeColoe, $themeColoe) right top,
          linear-gradient($themeColoe, $themeColoe) left bottom,
          linear-gradient($themeColoe, $themeColoe) left bottom,
          linear-gradient($themeColoe, $themeColoe) right bottom,
          linear-gradient($themeColoe, $themeColoe) right bottom;
        background-repeat: no-repeat;
        background-size: 1px 10px, 10px 1px;
      }
    }
  }

  .link-text {
    padding-top: 4px;
  }
}
</style>

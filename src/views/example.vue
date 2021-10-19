<!--
 * @Author: shiliangL
 * @Date: 2021-09-17 14:32:44
 * @LastEditTime: 2021-10-19 11:57:27
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="mapbox">
    <div class="bg-transparent">
      <div class="numberboard_board">
        <div class="numberboard_title">
          标题
        </div>
        <div class="numberboard_title red">
          标题
        </div>
        <div class="numberboard_title green">
          标题
        </div>
        <div class="numberboard_title blue">
          标题
        </div>
        <div class="numberboard_title yellow">
          标题
        </div>
        <div class="numberboard_title bluegreen">
          标题
        </div>
        <div class="numberboard_title purple">
          标题
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.mapbox {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #262829;
  .bg-transparent {
    margin: 100px;
  }
  .numberboard_board {
    padding: 10px;
    color: #ccc;
    z-index: 999;
    position: relative;
    border: 1px solid #7a7e84;
    background: rgba(33, 36, 37, 0.62);
    transition: all 0.18s ease-in;
    &::after,
    &::before {
      content: "";
      position: absolute;
      background: transparent;
      z-index: 0;
      pointer-events: none;
    }
    &::before {
      top: 10px;
      bottom: 10px;
      left: -1px;
      right: -1px;
      border-left: 1px solid #333;
      border-right: 1px solid #333;
    }
    &::after {
      top: -1px;
      bottom: -1px;
      left: 10px;
      right: 10px;
      border-top: 1px solid #333;
      border-bottom: 1px solid #333;
    }
  }

  // 将背景颜色值定义成变量
  $red: rgba(245, 108, 108, 1);
  $yellow: rgba(230, 162, 60, 1);
  $green: rgba(40, 218, 111, 0.5);
  $blue: rgba(64, 158, 255, 1);
  $bluegreen: rgba(41, 192, 194, 1);
  $purple: rgba(128, 0, 128, 1);

  //将背景颜色以键值对的形式存在map中
  $bgcolorlist: (
    1: $red,
    2: $yellow,
    3: $green,
    4: $bluegreen,
    5: $blue,
    6: $purple,
  );

  // 使用SASS each语法为每一个li设置background-color
  @each $i, $color in $bgcolorlist {
  }

  .numberboard_title {
    min-width: 130px;
    text-align: left;
    color: #fff;
    margin: 10px 10px 0 0;
    position: relative;
    padding: 5px 0 5px 10px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    border-left: 5px solid rgba(148, 159, 165, 1);
    background: rgba(148, 159, 165, 0.5);
    text-shadow: 1px 1px 1px #000, 1px 1px 1px #fff;
    &::after {
      position: absolute;
      right: -10px;
      bottom: 10px;
      top: 0;
      content: "";
      background: rgba(148, 159, 165, 0.5);
      width: 10px;
      pointer-events: none;
    }
    &::before {
      position: absolute;
      right: -11PX;
      bottom: 0;
      width: 0;
      height: 0;
      content: "";
      border-width: 5px;
      border-style: solid;
      border-bottom: 5px solid rgba(148, 159, 165, 0.5);
      border-right: 5px solid rgba(148, 159, 165, 0.5);
      border-color: rgba(148, 159, 165, 0.5) transparent transparent
        rgba(148, 159, 165, 0.5);
      pointer-events: none;
    }
    &.red {
      border-left: 5px solid rgba(251, 103, 103, 1);
      background: rgba(251, 103, 103, 0.5);
      &::after {
        background: rgba(251, 103, 103, 0.5);
      }
      &::before {
        border-bottom: 5px solid rgba(251, 103, 103, 0.5);
        border-right: 5px solid rgba(251, 103, 103, 0.5);
        border-color: rgba(251, 103, 103, 0.5) transparent transparent
          rgba(251, 103, 103, 0.5);
      }
    }
    &.green {
      background: rgba(40, 218, 111, 0.5);
      border-left: 5px solid rgba(40, 218, 111, 1);
      &::after {
        background: rgba(40, 218, 111, 0.5);
      }
      &::before {
        border-bottom: 5px solid rgba(40, 218, 111, 0.5);
        border-right: 5px solid rgba(40, 218, 111, 0.5);
        border-color: rgba(40, 218, 111, 0.5) transparent transparent
          rgba(40, 218, 111, 0.5);
      }
    }
    &.blue {
      border-left: 5px solid rgba(64, 158, 255, 1);
      background: rgba(64, 158, 255, 0.5);
      &::after {
        background: rgba(64, 158, 255, 0.5);
      }
      &::before {
        border-bottom: 5px solid rgba(64, 158, 255, 0.5);
        border-right: 5px solid rgba(64, 158, 255, 0.5);
        border-color: rgba(64, 158, 255, 0.5) transparent transparent
          rgba(64, 158, 255, 0.5);
      }
    }
    &.yellow {
      border-left: 5px solid rgba(230, 162, 60, 1);
      background: rgba(230, 162, 60, 0.5);
      &::after {
        background: rgba(230, 162, 60, 0.5);
      }
      &::before {
        border-bottom: 5px solid rgba(230, 162, 60, 0.5);
        border-right: 5px solid rgba(230, 162, 60, 0.5);
        border-color: rgba(230, 162, 60, 0.5) transparent transparent
          rgba(230, 162, 60, 0.5);
      }
    }
    &.bluegreen {
      border-left: 5px solid rgba(41, 192, 194, 1);
      background: rgba(41, 192, 194, 0.5);
      &::after {
        background: rgba(41, 192, 194, 0.5);
      }
      &::before {
        border-bottom: 5px solid rgba(41, 192, 194, 0.5);
        border-right: 5px solid rgba(41, 192, 194, 0.5);
        border-color: rgba(41, 192, 194, 0.5) transparent transparent
          rgba(41, 192, 194, 0.5);
      }
    }
    &.purple {
      border-left: 5px solid rgba(128, 0, 128, 1);
      background: rgba(128, 0, 128, 0.5);
      &::after {
        background: rgba(128, 0, 128, 0.5);
      }
      &::before {
        border-bottom: 5px solid rgba(128, 0, 128, 0.5);
        border-right: 5px solid rgba(128, 0, 128, 0.5);
        border-color: rgba(128, 0, 128, 0.5) transparent transparent
          rgba(128, 0, 128, 0.5);
      }
    }
  }
}
</style>

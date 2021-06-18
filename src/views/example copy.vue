<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 08:51:53
 * @LastEditTime: 2021-06-11 11:03:24
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="example">
    <ul
      class="tabbar"
      :class="isOpen ? 'open':''"
    >
      <li>
        <div
          class="fileAdd"
          @click="openAdd"
          :class="isOpen ? 'open':''"
        >
          <ul>
            <li class="word"> <span v-if="isOpen"> 人员信息管理 </span> </li>
            <li class="powerpoint"> <span v-if="isOpen"> 车辆信息管理 </span> </li>
            <li class="excel"> <span v-if="isOpen"> 综合管理监控 </span> </li>
          </ul>
          <div>
            <span></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openAdd() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.example {
  width: 100%;
  height: 100%;
  padding: 100px;
  // background-size: 100% center;
  // background: url("~@/assets/bg.jpg") no-repeat;
}
$background: #5628ee;
$backgroundLight: #8c6ff0;
$word: #daedfe;
$wordColor: #46a7fe;
$powerpoint: #fde5e1;
$powerpointColor: #f57f65;
$excel: #d4f5df;
$excelColor: #2acf62;

.fileAdd {
  width: 32px;
  height: 24px;
  background: $background;
  border-radius: 0 3px 3px 3px;
  position: relative;
  margin: 2px 0 0 0;
  perspective: 32px * 5;
  cursor: pointer;
  &:before {
    content: "";
    border-radius: 2px 2px 0 0;
    background: inherit;
    height: 2px;
    width: 20px;
    display: block;
    position: absolute;
    top: -2px;
    left: 0;
  }
  div {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20px;
    background: $backgroundLight;
    border-radius: 2px 2px 3px 3px;
    z-index: 2;
    transition: transform 0.25s ease;
    transform-origin: 50% 100%;
    span {
      display: block;
      width: 10px;
      height: 10px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -5px 0 0 -5px;
      transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.3, 1.4);
      &:before,
      &:after {
        content: "";
        height: 10px;
        width: 2px;
        border-radius: 1px;
        background: #fff;
        display: block;
        position: absolute;
        left: 4px;
        top: 0;
      }
      &:before {
        transform: scaleX(0.75);
      }
      &:after {
        transform: scaleY(0.75) rotate(90deg);
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    perspective: 300px;
    li {
      --translateY: 0;
      --translateX: 0;
      --scale: 0.92;
      bottom: 0;
      left: 6px;
      position: absolute;
      width: 20px;
      height: 26px;
      transition: transform 0.45s ease;
      transform: translateY(var(--translateY)) translateX(var(--translateX))
        scaleX(var(--scale));
      &:before,
      &:after {
        --rotateY: 0deg;
        --rotateZ: 90deg;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 2px;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: transform 0.4s ease;
        transform: rotateY(var(--rotateY)) rotateZ(var(--rotateZ));
      }
      &:after {
        --rotateY: -180deg;
        z-index: 1;
        text-align: center;
        font-size: 10px;
        font-weight: 600;
        color: #fff;
        line-height: 26px;
        font-family: "Mukta Malar";
      }
      &.word {
        &:before {
          background: mix($background, #fff, 70%);
        }
        &:after {
          background: $word;
          color: $wordColor;
          content: "W";
        }
      }
      &.powerpoint {
        --translateY: 1px;
        --scale: 0.96;
        &:before {
          background: mix($background, #fff, 40%);
        }
        &:after {
          background: $powerpoint;
          color: $powerpointColor;
          content: "P";
        }
      }
      &.excel {
        --translateY: 2px;
        --scale: 1;
        &:before {
          background: #fff;
        }
        &:after {
          background: $excel;
          color: $excelColor;
          content: "E";
        }
      }
    }
  }
  &:hover {
    div {
      transform: rotateX(-30deg);
    }
  }
  &:active {
    span {
      transform: scale(0.84);
    }
  }
  &.open {
    div {
      transform: rotateX(-30deg);
      span {
        transform: rotateZ(45deg);
      }
    }
    &:active {
      span {
        transform: scale(0.84) rotateZ(45deg);
      }
    }
    ul {
      li {
        --scale: 1;
        &:before {
          --rotateY: 180deg;
          --rotateZ: 0deg;
        }
        &:after {
          --rotateY: 0deg;
          --rotateZ: 0deg;
        }
        &.word {
          --translateY: -32px;
          --translateX: -36px;
          &:hover {
            --translateY: -30px;
          }
        }
        &.powerpoint {
          --translateY: -44px;
          --translateX: 0px;
          &:hover {
            --translateY: -42px;
          }
        }
        &.excel {
          --translateY: -32px;
          --translateX: 36px;
          &:hover {
            --translateY: -30px;
          }
        }
      }
    }
  }
}

.tabbar {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  & > li {
    margin: 0 11px;
    & > svg {
      width: 14px;
      height: 14px;
      display: block;
      fill: #2f3545;
      transition: opacity 0.3s ease;
    }
  }
  &.open {
    & > li {
      & > svg {
        opacity: 0.5;
      }
    }
  }
}
</style>

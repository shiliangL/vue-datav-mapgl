<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 08:51:53
 * @LastEditTime: 2021-06-18 11:33:53
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="chartNum">
    <div
      ref="CountUpTarget"
      class="CountUpTarget"
    />
    <div class="border">
      <div
        class="countUpTarget-item"
        v-for="(item,index) in countUpTargetLength"
        :key="index"
      />
    </div>
  </div>
</template>
<script>

import { CountUp } from 'countup.js';

export default {
  name: 'NumberScroll',
  props: {
    number: {
      type: [String, Number],
      default: () => 900,
    },
  },
  data() {
    return {

    };
  },
  computed: {
    countUpTargetString() {
      return this.number.toString();
    },
    countUpTargetLength() {
      const str = this.countUpTargetString;
      return str.length;
    },
  },
  watch: {
    number: {
      immediate: true,
      handler(value) {
        return this.numAnim ? this.numAnim.update(value) : this.initNumAnim();
      },
    },
  },
  mounted() {
    this.initNumAnim();
  },
  methods: {
    initNumAnim() {
      this.$nextTick().then(() => {
        const { number, $refs } = this;
        const options = {
          useEasing: true,
          useGrouping: true,
          separator: '',
          decimal: '.',
          prefix: '',
          suffix: '',
          duration: 4,
          decimalPlaces: 0,
          easingFn: (t, b, c, d) => {
            // eslint-disable-next-line no-param-reassign
            const ts = (t /= d) * t;
            const tc = ts * t;
            const s = (1.77635683940025e-15 * tc * ts + 0.999999999999998 * tc + -3 * ts + 3 * t);
            return b + c * s;
          },
        };
        const el = $refs.CountUpTarget;
        this.numAnim = new CountUp(el, number, options);
        if (this.numAnim) this.numAnim.start();
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.chartNum {
  display: inline-block;
  position: relative;
  .CountUpTarget {
    top: 50%;
    left: 20px;
    font-size: 20px;
    font-weight: 400;
    text-align: right;
    user-select: none;
    position: absolute;
    letter-spacing: 38px;
    color: $themeWhiteColoe;
    transform: translate(0%, -50%);
  }
  .border {
    display: flex;
    align-items: center;
    .countUpTarget-item {
      margin: 4px;
      width: 40px;
      height: 48px;
      border-radius: 3px;
      border: 1px solid $themeColoe;
    }
  }
}
</style>

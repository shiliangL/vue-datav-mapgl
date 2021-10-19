<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 08:51:53
 * @LastEditTime: 2021-06-18 10:49:03
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
          duration: 10,
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
  position: relative;
  .CountUpTarget {
    top: 0;
    left: 18px;
    line-height: 40px;
    text-align: right;
    position: absolute;
    letter-spacing: 32px;
  }
  .border {
    display: flex;
    align-items: center;
    .countUpTarget-item {
      margin: 4px;
      width: 30px;
      height: 40px;
      border: 1px solid $themeColoe;
    }
  }
}
</style>

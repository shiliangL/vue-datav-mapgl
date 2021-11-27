<template>
  <component
    :is="as"
    class="scroll-num"
    :class="{ 'border-animate': showAnimate }"
    :style="{ '--i': i, '--delay': delay }"
    @animationend="showAnimate = false"
  >
    <ul
      ref="ul"
      :class="{ animate: showAnimate }"
    >
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>0</li>
    </ul>
    <svg width="0" height="0">
      <filter id="blur">
        <feGaussianBlur
          in="SourceGraphic"
          :stdDeviation="`0 ${blur}`"
        />
      </filter>
    </svg>
  </component>
</template>

<script>

export default {
  name: 'ScrollNumberItem',
  props: {
    as: {
      type: String,
      default: 'div',
    },
    i: {
      type: Number,
      default: 0,
      validator: (v) => v < 10 && v >= 0 && Number.isInteger(v),
    },
    delay: {
      type: Number,
      default: 1,
    },
    blur: {
      type: Number,
      default: 2,
    },
  },
  data: () => ({
    timer: null,
    showAnimate: true,
  }),
  watch: { i() { this.showAnimate = true; } },
  mounted() {
    const ua = navigator.userAgent.toLowerCase();
    const testUA = (regexp) => regexp.test(ua);
    const isSafari = testUA(/safari/g) && !testUA(/chrome/g);

    // Safari浏览器的兼容代码
    // eslint-disable-next-line no-unused-expressions
    isSafari && (this.timer = setTimeout(() => {
      this.$refs.ul.setAttribute('style', `
        animation: none;
        transform: translateY(calc(var(--i) * -9.09%))
      `);
    }, this.delay * 1000));
  },
  beforeDestroy() { clearTimeout(this.timer); },
};
</script>

<style scoped>
.scroll-num {
  width: var(--width, 20px);
  height: var(--height, calc(var(--width, 20px) * 1.8));
  color: var(--color, #fff);
  font-size: var(--height, calc(var(--width, 20px) * 1.1));
  line-height: var(--height, calc(var(--width, 20px) * 1.8));
  text-align: center;
  overflow: hidden;
}

.animate {
  animation: move .3s linear infinite,
    bounce-in-down 1s calc(var(--delay) * 1s) forwards
}
.border-animate {
  animation: enhance-bounce-in-down 1s calc(var(--delay) * 1s) forwards
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
  transform: translateY(calc(var(--i) * -9.09%));
}

@keyframes move {
  from {
    transform: translateY(-90%);
    filter: url(#blur)
  }
  to {
    transform: translateY(1%);
    filter: url(#blur)
  }
}

@keyframes bounce-in-down {
  from {
    transform: translateY(calc(var(--i) * -9.09% - 7%));
    filter: none
  }
  25% { transform: translateY(calc(var(--i) * -9.09% + 3%)) }
  50% { transform: translateY(calc(var(--i) * -9.09% - 1%)) }
  70% { transform: translateY(calc(var(--i) * -9.09% + .6%)) }
  85% { transform: translateY(calc(var(--i) * -9.09% - .3%)) }
  to { transform: translateY(calc(var(--i) * -9.09%)) }
}

@keyframes enhance-bounce-in-down {
  25% { transform: translateY(8%) }
  50% { transform: translateY(-4%) }
  70% { transform: translateY(2%) }
  85% { transform: translateY(-1%) }
  to { transform: translateY(0) }
}
</style>

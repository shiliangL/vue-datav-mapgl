<!--
 * @Author: shiliangL
 * @Date: 2021-09-19 00:15:40
 * @LastEditTime: 2021-09-19 00:29:09
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div id="clock">
    <p class="date">{{ clock.date }}</p>
    <p class="time">{{ clock.time }}</p>
  </div>
</template>

<script>
export default {
  name: 'CubeTime',
  data() {
    return {
      clock: {
        time: '',
        date: '',
      },
    };
  },
  mounted() {
    this.updateTime();
    this.timerID = setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  methods: {
    updateTime() {
      const cd = new Date();
      const { zeroPadding } = this;
      const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      this.clock.time = `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(cd.getMinutes(), 2)}:${zeroPadding(cd.getSeconds(), 2)}`;
      this.clock.date = `${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(cd.getMonth() + 1, 2)}-${zeroPadding(cd.getDate(), 2)} ${week[cd.getDay()]}`;
    },
    zeroPadding(num, digit) {
      let zero = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>

<style lang="scss" scoped>
#clock {
  position: fixed;
  top: 4px;
  right: 6px;
  z-index: 1;
  color: #ffffff;
  text-align: center;
  position: absolute;
  color: #daf6ff;
  font-family: "Share Tech Mono", monospace;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
  .time {
    margin: 0;
    padding: 0;
    font-size: 14px;
    letter-spacing: 0.05em;
  }
  .date {
    margin: 0;
    padding: 0;
    letter-spacing: 0.1em;
    font-size: 12px;
  }
}
</style>

<!--
 * @Author: shiliangL
 * @Date: 2021-11-27 18:37:23
 * @LastEditTime: 2021-11-27 18:51:35
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <ul class="flex">
    <ScrollNum
      v-for="(num, idx) of numArr"
      :key="idx"
      as="li"
      :i="num"
      :delay="idx + 1"
    />
  </ul>
</template>

<script>

import ScrollNum from './scrollItem.vue';

export default {
  name: 'ScrollNumber',
  components: { ScrollNum },
  props: {
    num: {
      type: [String, Number],
      default: 0,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    numArr() {
      const str = String(this.num);
      const arr = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < str.length; i++) {
        // eslint-disable-next-line radix
        arr.push(parseInt(str[i]));
      }
      return arr;
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
ul {
  color: #fff;
  padding: 0;
  margin: 0;
  list-style: none;
}
.num {
  --width: 26px;
  margin-right: 6px;
  border: 1px solid black;
  border-radius: 8px
}
</style>

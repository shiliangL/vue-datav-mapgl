<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:33:32
 * @LastEditTime: 2021-06-12 22:59:05
 * @LastEditors: Do not edit
 * @Description:
-->

<template>
 <div class="SelectBar">
    <input type="text">
 </div>
</template>

<script>

export default {
  name: 'SelectBar',
  components: {
  },
  props: {
    option: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectValue: '',
    };
  },
};
</script>

<style lang="scss">

</style>

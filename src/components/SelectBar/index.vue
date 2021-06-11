<!--
 * @Author: shiliangL
 * @Date: 2021-06-11 09:33:32
 * @LastEditTime: 2021-06-11 17:22:18
 * @LastEditors: Do not edit
 * @Description:
-->

<template>
  <el-select
    class="SelectBar"
    v-model="selectValue"
  >
    <el-option value="dog">Dog</el-option>
  </el-select>
</template>

<script>

import { Option, Select } from 'element-ui';

export default {
  name: 'SelectBar',
  components: {
    ElSelect: Select,
    ElOption: Option,
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
.SelectBar {
  font-size: 14Px;
  .el-input__inner {
    font-size: 14Px;
    height: 20px !important;
  }
}
</style>

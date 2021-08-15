<!--
 * @Author: shiliangL
 * @Date: 2021-08-15 16:59:07
 * @LastEditTime: 2021-08-15 17:56:25
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component'
@Options({
  components: {
  },
  data() {
    return {
      shiliangl: 'shiliangl'
    }
  },
  mounted() {
    console.log(this.shiliangl)
  }
})
export default class Home extends Vue {
}
</script>

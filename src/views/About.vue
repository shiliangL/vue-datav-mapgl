<!--
 * @Author: shiliangL
 * @Date: 2021-08-15 16:59:07
 * @LastEditTime: 2021-08-16 21:16:10
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div class="about">
    <div id="home_map_container_id"></div>
  </div>
</template>

<script lang='ts'>
import { onMounted } from 'vue'
import BMapGLClass from '@/utils/BMapGLClass'

export default {
  setup() {
    onMounted(() => {
      const bMapClass = new BMapGLClass({
        container: 'home_map_container_id',
        centerName: '深圳市'
      })
      console.log(bMapClass, 'bMapClass')
    })

    return {}
  }
}
</script>

<style lang="scss" scoped>
.about,
#home_map_container_id {
  width: 100%;
  height: 100%;
}
</style>

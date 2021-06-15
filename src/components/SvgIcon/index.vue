<!--
 * @Author: shiliangL
 * @Date: 2021-05-21 11:21:03
 * @LastEditTime: 2021-06-11 21:12:09
 * @LastEditors: Do not edit
 * @Description:
-->
<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <svg
    v-else
    :class="svgClass"
    aria-hidden="true"
    v-on="$listeners"
  >
    <use :href="iconName" />
  </svg>
</template>

<script>

// eslint-disable-next-line import/extensions
import { isExternal } from '@/utils/index.js';

export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    isExternal() {
      return isExternal(this.iconClass);
    },
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      }
      return 'svg-icon';
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`,
      };
    },
  },
};
</script>

<style scoped>

.svg-icon {
  width: 3rem;
  height: 3rem;
  fill: currentColor;
  overflow: hidden;
  vertical-align: -0.15em;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>

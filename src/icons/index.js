/*
 * @Author: shiliangL
 * @Date: 2021-05-21 11:21:03
 * @LastEditTime: 2021-06-12 16:56:50
 * @LastEditors: Do not edit
 * @Description:
 */
import Vue from 'vue';
// eslint-disable-next-line import/extensions
import SvgIcon from '@/components/SvgIcon';// svg component

// register globally
Vue.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(req);

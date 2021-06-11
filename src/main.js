/*
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-06-10 17:31:25
 * @LastEditors: Do not edit
 * @Description:
 */
import 'normalize.css/normalize.css'; // a modern alternative to CSS resets
import '@/styles/index.scss'; // global css
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/utils/rem';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

/*
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-06-12 16:16:53
 * @LastEditors: Do not edit
 * @Description:
 */
import 'normalize.css/normalize.css';
import './styles/index.scss';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './utils/rem';
import './icons';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

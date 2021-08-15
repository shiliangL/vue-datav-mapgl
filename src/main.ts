/*
 * @Author: shiliangL
 * @Date: 2021-08-15 16:59:07
 * @LastEditTime: 2021-08-15 18:10:36
 * @LastEditors: Do not edit
 * @Description:
 */
// import './styles/element-variables.scss'
import '@/styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

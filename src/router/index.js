/*
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-06-11 09:20:44
 * @LastEditors: Do not edit
 * @Description:
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
      },
    ],
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('../views/Example.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

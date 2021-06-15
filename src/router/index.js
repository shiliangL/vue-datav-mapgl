/*
 * @Author: shiliangL
 * @Date: 2021-06-09 13:39:57
 * @LastEditTime: 2021-06-15 21:39:30
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
        path: 'theVehicleWarning',
        name: 'TheVehicleWarning',
        component: () => import('../views/TheVehicleWarning/index.vue'),
      },
      {
        path: 'thePeopleWarning',
        name: 'ThePeopleWarning',
        component: () => import('../views/ThePeopleWarning/index.vue'),
      },
      {
        path: 'safetyWarning',
        name: 'SafetyWarning',
        component: () => import('../views/SafetyWarning/index.vue'),
      },
      {
        path: 'earlyWarning',
        name: 'EarlyWarning',
        component: () => import('../views/EarlyWarning/index.vue'),
      },
    ],
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('../views/example.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

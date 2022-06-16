import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import Gas from '../pages/gas.vue';
import Wasser from '../pages/wasser.vue';
import Bad from '../pages/bad.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/gas', component: Gas },
  { path: '/wasser', component: Wasser },
  { path: '/bad', component: Bad },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
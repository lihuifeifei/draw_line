import Vue from 'vue'
import VueRouter from 'vue-router'
import various_10 from '../views/various_10.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:'/various_10',
    name: 'various_10',
    component: various_10
  },

  {
    path: '/various_10',
    name: 'various_10',
    component: various_10
  },
  {
    path: '/various_30',
    name: 'various_30',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/various_30.vue')
  },
  {
    path: '/various_50',
    name: 'various_50',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/various_50.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import index from '../views/home/Index.vue';
import otherRouter from './routerOpt';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  }
  // {
  //     path: '/about',
  //     name: 'About',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.addRoutes(otherRouter);

export default router;

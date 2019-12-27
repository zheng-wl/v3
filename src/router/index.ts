import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Scss from '../views/Sass.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/scss',
    name: 'scss',
    component: Scss,
  },
  {
    path: '/ts',
    name: 'ts',
	  component: () => import(/* webpackChunkName: "about" */ '../views/Ts.vue'),
  },
  {
    path:'/fun01',
    name:'fun01',
    component:() => import( '../views/fun01.vue')
  },
  {
    path:'/fun02',
    name:'fun02',
    component:() => import( '../views/fun02.vue')
  },
  {
    path:'/fun03',
    name:'/fun03',
    component:() => import( '../views/fun03.vue')
  },
  {
    path:'/fun04',
    name:'/fun04',
    component:() => import( '../views/fun04/fun04.vue')
  },
  {
    path:'/funceshi',
    name:'/funceshi',
    component:() => import( '../views/ceshifun.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

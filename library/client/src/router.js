import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Layout from '@/views/Layout';
import Dashboard from '@/views/Dashboard';
import About from '@/views/About';
import Contact from '@/views/Contact';
import Login from '@/views/Login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
        {
          path: '/contact',
          name: 'contact',
          component: Contact,
        },
      ],
    },
  ],
});

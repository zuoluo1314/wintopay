import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import Index from '@/views/Index.vue';
import Home from '@/views/Home/index.vue';
import Login from '@/views/Login/index.vue';
import Kitchen from '@/views/Kitchen/index.vue';
import Blog from '@/views/Blog/index.vue';
import News from '@/views/News/index.vue';
import Resiter from '@/views/Resiter/index.vue';
import Jquery from '@/views/Jquery/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/kitchen',
    name: 'Kitchen',
    component: Kitchen,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    // 全局守卫2
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/resiter',
    name: 'Resiter',
    component: Resiter,
  },
  // 搜索功能实现3：搜索展示界面路由设置
  {
    path: '/jquery',
    name: 'Jquery',
    component: Jquery,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

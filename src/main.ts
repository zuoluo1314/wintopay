import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import VueLazyload from 'vue-lazyload';
// 数据持久化3导入
import { getStore } from '@/utils/storage';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

// 使用vue-lazylocad 懒加载1
Vue.use(VueLazyload);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/images/error.png',
  loading: 'static/images/load.gif',
  attempt: 1,
});

Vue.prototype.$http = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 登录6： 请求拦截器 将token绑定到每个网页作为数据头
axios.interceptors.request.use((config) => {
  // 如何从本地获取数据：(存储的为对象类型) const token = getStore('token');  不要用这个写法
  const token = localStorage.getItem('token');
  console.log(token);
  if (token) {
    // 表示用户已登录
    const obj = config;
    obj.headers.common.Authorization = token;
  }
  return config;
}, (error) => (Promise.reject(error)));

// 登录7：全局守卫1多个组件进行登录权限控制
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    // 需要权限，在黑名单
    if (!localStorage.getItem('user')) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
          // http://localhost:8080/login?redirect=%2Fblog 便于登录界面登录之后跳转回当前界面
        },
      });
    } else {
      next();
    }
  }
  // 在白名单
  next();
});

// 全局守卫1 带tocken验证，完整版
// router.beforeEach((to, from, next) => {
//   // 将获取的数据头中tocken 每次网页路由改变，进行权限控制时，都验证tocken
//   axios.post('/api/validate', {}).then((res) => {
//     const datas = res.data;
//     if (datas.state !== 1) {
//       // 用户要登录
//       if (to.matched.some((record) => record.meta.requireAuth)) {
//         // 用户未登录 需要跳转登录页面
//         next({
//           path: '/login',
//           query: {
//             redirect: to.fullPath,
//           },
//         });
//       } else {
//         next();
//       }
//     } else {
//       // 保存用户的信息
//       // 将date提交到store>index.js中ISLOGIN的info
//       store.commit('ISLOGIN', datas);

//       if (to.path === '/login') {
//         router.push({
//           path: '/',
//         });
//       }
//       next();
//     }
//   }).catch((error) => {
//     console.log(error);
//   });
// });

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

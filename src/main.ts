import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import VueLazyload from 'vue-lazyload';
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

// 全局守卫1多个组件进行登录权限控制
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

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

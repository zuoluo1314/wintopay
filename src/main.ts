import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http = axios;

Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

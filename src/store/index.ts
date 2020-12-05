import Vue from 'vue';
import Vuex from 'vuex';
import { setStore, getStore } from '@/utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 购物车3
    login: false,
    userInfo: null,
    cartList: [],
    showCart: false,
  },
  mutations: {
    // 登录8：接受数据，改变login的值和复制给userinfo
    ISLOGIN(state, info) {
      state.userInfo = info;
      state.login = true;
      setStore('userInfo', info);
    },
    // 购物车7 网页初始化时从本地缓存获取购物车数据
    INITBUYCART(state) {
      const initCart = localStorage.getItem('buyCart');
      if (initCart) {
        state.cartList = JSON.parse(initCart);
      }
    },
    // 购物车4 接受首页购物车点击商品 传过来的商品数据 添加到cartlist中
    ADDCART(state, {
      productId,
      salePrice,
      productName,
      productImageBig,
      productNum,
    }) {
      const cart = state.cartList;
      const goods = {
        productId,
        salePrice,
        productName,
        productImageBig,
        productNum,
      };
      let falg = false;
      if (cart.length) {
        cart.forEach((item) => {
          if (item.productId === productId) {
            if (item.productNum >= 0) {
              falg = false;
              const obj = item;
              obj.productNum += 1;
            }
          } else {
            falg = true;
          }
        });
      }
      if (!cart.length || falg) {
        // goods.productNum = productNum;
        cart.push(goods);
      }
      state.cartList = cart;
      // 调用utils>storage.js 接口中setStore存储数据
      const carts = JSON.stringify(cart);
      setStore('buyCart', carts);
    },
  },
  actions: {
  },
  modules: {
  },
});

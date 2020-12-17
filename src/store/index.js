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
    feaItem: null,
    jqueryList: null,
    language: 'zh-CN', // 语言标识  默认的语言
  },
  mutations: {
    // 中英文切换5:将当前语言存储到store
    LANGUAGE(state, language) {
      state.language = language;
      // 中英文切换7:持久化-储存数据
      setStore('language', language);
    },
    // 中英文切换7:持久化-取出数据
    INITLANGUAGE(state, language) {
      const languages = localStorage.getItem('language');
      if (languages) {
        state.language = languages;
      }
    },
    // 搜索功能实现5:接受搜索到的商品
    JQUERYLIST(state, jqueryList) {
      state.jqueryList = jqueryList;
      // 搜索功能实现8：展示商品持久化-将搜索到的商品存储到当地
      const jqueryLists = JSON.stringify(jqueryList);
      setStore('jqueryList', jqueryLists);
    },

    // 传送数据到store2:接受特色商品函数
    FEAITEM(state, feaItem) {
      state.feaItem = feaItem;
      console.log(state.feaItem);
    },
    // 登录8：接受数据，改变login的值和复制给userinfo
    ISLOGIN(state, info) {
      state.userInfo = info;
      state.login = true;
      // const trues = JSON.stringify(true);
      // 登录12登录持久化1：登录按钮触发此函数，将登录状态改为true
      setStore('login', true);
      setStore('userInfo', info);
    },
    // 购物车7 网页初始化时从本地缓存获取购物车数据
    INITBUYCART(state) {
      const initCart = localStorage.getItem('buyCart');
      const initLogin = localStorage.getItem('login');
      if (initCart) {
        state.cartList = JSON.parse(initCart);
      } if (initLogin) {
        // 登录13登录持久化2：网页刷新，导航加载完，触发INITBUYCART方法，改变登录状态值，保持登录状态 再次尽量不用else if容易出错
        state.login = true;
      }
    },
    // 搜索功能实现9:展示商品持久化-当搜索展示组件刷新，触发mouted中INIJQUERYLIST函数将存储本地的搜索到商品取出来为json格式记得解析在赋值，赋值给state
    INITJQUERYLIST(state) {
      const initjqueryList = localStorage.getItem('jqueryList');
      console.log(initjqueryList);
      if (initjqueryList) {
        state.jqueryList = JSON.parse(initjqueryList);
        console.log(state.jqueryList);
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
    // 传送数据到store1:接受特色商品函数
    FEAITEM({ commit }, feaItem) {
      commit('FEAITEM', feaItem);
    },
  },
  modules: {
  },
});

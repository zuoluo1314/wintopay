<template>
  <div class="header-box">
    <!-- 顶部实现 -->
    <div class="topBar">
      <div class="container">
        <div class="left">
          <a href="#" class="moy">
            <el-col :span="12">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  ¥货币<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>$ US Dollar</el-dropdown-item>
                  <el-dropdown-item>¥ 人民币</el-dropdown-item>
                  <el-dropdown-item>$ 港币</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </a>
          <a href="#" class="lge">
            <el-col :span="12">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <img src="@/assets/images/语言.png" style="width: 15px" />
                  语言<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <img src="@/assets/images/语言.png" style="width: 15px" />
                    English</el-dropdown-item
                  >
                  <el-dropdown-item>简体中文</el-dropdown-item>
                  <el-dropdown-item>繁體中文</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </a>
        </div>

        <div class="right">
          <a href="#" class="q">
            <img
              src="../assets/images/QQ.png"
              style="width: 15px"
              height="15px"
            />
            <span>用QQ账号登录</span>
          </a>
          <a href="#" class="tel">
            <img
              src="../assets/images/电话.png"
              style="width: 15px"
              height="15px"
            />
            <span>18888888888</span>
          </a>
          <a href="#" class="number">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <img src="../assets/images/会员.png" style="width: 15px" />
                会员账户<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="drop">
                <!-- 登录1：使用element下拉组件，完成样式实现 通过v-is进行登录非登录状态实现 -->
                <span class="noLogin" v-if="!login">
                  <el-dropdown-item>
                    <router-link :to="{ name: 'Resiter' }" class="nav-sub"
                      >注册</router-link
                    >
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link :to="{ name: 'Login' }" class="nav-sub"
                      >登录</router-link
                    >
                  </el-dropdown-item>
                </span>

                <span class="isLogin" v-if="login">
                  <!-- <span
                    class="avatar"
                    :style="{
                      backgroundImage: 'url(' + userInfo.file + ')',
                    }"
                  >
                  </span> -->
                  <!-- <p class="name">{{ userInfo.username }}</p> -->
                  <el-dropdown-item>
                    <router-link to="/user/account">会员账户</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/user/order">历史订单</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/user/sum">账户余额</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <router-link to="/user/download">下载文件</router-link>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <a href="javascript:;" @click="logout">退出</a>
                  </el-dropdown-item>
                </span>
              </el-dropdown-menu>
            </el-dropdown>
          </a>
          <a href="#" class="">
            <img
              src="../assets/images/收藏.png"
              style="width: 15px"
              height="15px"
            />
            <span>收藏（0）</span>
          </a>
          <a href="#" class="">
            <img
              src="../assets/images/购物车.png"
              style="width: 15px"
              height="15px"
            />
            <span>购物车</span>
          </a>
          <a href="#" class="">
            <img
              src="../assets/images/结算.png"
              style="width: 15px"
              height="15px"
            />
            <span>结算</span>
          </a>
        </div>
      </div>
    </div>

    <!-- 导航1实现 -->
    <div class="header">
      <div class="container">
        <div class="left">
          <a href="#">
            <img src="@/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div class="right">
          <div class="search">
            <el-input
              placeholder="请输入内容"
              v-model="input3"
              class="input-with-select"
            >
              <el-button
                slot="append"
                icon="el-icon-search"
                class="btn"
              ></el-button>
            </el-input>
          </div>
          <!-- 购物车1：样式实现 -->
          <div class="shop">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <img
                src="../assets/images/购物车.png"
                alt=""
                style="width: 15px"
              />
              <span> {{totalNum}}项商品-¥{{totalPrice}} </span>
              </span>
              <el-dropdown-menu slot="dropdown" class="drop1">
                <span class="item">
                  <el-dropdown-item class="item-cart" v-for="(goods,index) in cartList" :key='index'>
                    <span class="item-img">
                      <img :src="goods.productImageBig" alt="">
                    </span>
                    <span>
                        <a href="https://www.sg2288.com/index.php?route=product/product&product_id=40">{{goods.productName}}</a>
                    </span>
                    <span>
                      x{{goods.productNum}}
                    </span>
                    <span>
                      ${{goods.salePrice}}
                    </span>
                    <span>
                      <a href="#">删除</a>
                    </span>
                  </el-dropdown-item>
                </span>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航2实现-->
    <div class="nav">
      <div class="container">
        <router-link :to="{ name: 'Kitchen' }" class="nav-sub"
          >厨房用品</router-link
        >
        <router-link :to="{ name: 'Blog' }" class="nav-sub">博客</router-link>
        <router-link :to="{ name: 'News' }" class="nav-sub">新闻</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { getStore, removeStore } from '@/utils/storage';

export default {
  data() {
    return {
      // 获取vuex中login数据
      // login: this.$store.state.login,
      // userInfo: this.$store.state.userInfo,
      // cartList: this.$store.state.cartList,
    };
  },
  computed: {
    // 登录10：获取vuex中login值，从而渲染登录与非登录样式的实现
    // 购物车6：从vuex中获取cartList数据，在页面上进行渲染
    ...mapState(['login', 'cartList']),
    ...mapMutations(['INITBUYCART']),
    // 计算总数量
    // reduce  对数组每一项进行遍历，但是reduce() 可同时将前面数组项遍历产生的结果与当前遍历项进行运算
    totalNum() {
      return (
        console.log(this.cartList),
        this.cartList.reduce((total, item) => {
          let obj = total;
          obj += item.productNum;
          return obj;
        }, 0)
      );
    },
    // 计算总价格
    totalPrice() {
      return (
        this.cartList.reduce((total, item) => {
          let obj = total;
          obj += item.productNum * item.salePrice;
          return obj;
        }, 0)
      );
    },
  },
  methods: {
    // 登录11：登录退出
    logout() {
      removeStore('token');
      removeStore('user');
      // 跳转到首页
      window.location.href = '/';
    },
  },
  // 购物车8 当前组件加载完毕，获取后端购物车中存储的数据
  mounted() {
    this.INITBUYCART();
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/style/reset';
// 顶部star
.topBar {
  width: 100%;
  height: 69px;
  background-color: #eeeeee;
}

.container {
  width: 1226px;
  height: 69px;
  margin: 0 auto;
}

.topBar .container .left {
  width: 240px;
  height: 69px;
  line-height: 69px;
  margin-left: 10px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #888888;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.topBar .container .right {
  height: 69px;
  line-height: 69px;
  float: right;
  margin-top: -69px;
}

.drop{
  margin-top: -20px;
  margin-left: -60px;
}

.topBar .container .right .q {
  background-color: #007dcb;
  color: #dfeef7;
}

.topBar .container .right a {
  margin-right: 26px;
  color: #888888;
}

.topBar .container a:hover {
  color: black;
}
//顶部end
//导航1 star
.header {
  width: 100%;
  height: 122px;
  background-color: #ffffff;
}

.header .container {
  width: 1226px;
  height: 122px;
  float: left;
}

.header .container .left {
  width: 260px;
  height: 122px;
  line-height: 122px;
  float: left;
}

.header .container .right {
  width: 750px;
  height: 122px;
  float: left;
  margin-left: 100px;
}

.header .container .right .search {
  width: 460px;
  height: 122px;
  margin-top: 15px;
}

.header .container .right .search .btn:hover {
  border: 1px solid #383838;
  color: #383838;
}

.header .container .right .shop {
  width: 263px;
  height: 40px;
  background-color: #383838;
  line-height: 40px;
  text-align: center;
  float: right;
  margin-top: -122px;
  margin-right: -110px;
}

.drop1{
  margin-right: -70px;
}

.item-img{
  float: left;
}

.item-img img{
  width: 60px;
  height: 60px;
  margin-top: 20px;
}

.item-cart{
  width: 420px;
  height: 100px;
  line-height: 100px;
}

.item-cart span{
  display: inline-block;
  height: 100px;
  width: 80px;
  // margin-left: 5px;
}

.header .container .right .shop:hover {
  background-color: black;
}

.header .container .right .shop a {
  width: 263px;
  height: 40px;
  color: white;
}
//导航1end
//导航2star
.nav {
  width: 100%;
  height: 40px;
  background-color: #2199c6;
}

.nav .container {
  width: 1226px;
  height: 40px;
  line-height: 40px;
  float: left;
}
// .nav .container  el-breadcrumb el-breadcrumb-item{
//   color:white;
//   background-color:red;
// }
.nav .container .nav-sub {
  color: #ffe5dd;
  font-size: 12px;
  margin-right: 20px;
  height: 40px;
  display: inline-block;
}

.nav .container .nav-sub:hover {
  background-color: royalblue;
}
</style>

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
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item> 登录</el-dropdown-item>
                <el-dropdown-item>注册</el-dropdown-item>
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
          <div class="shop">
            <a href="#">
              <img
                src="../assets/images/购物车.png"
                alt=""
                style="width: 15px"
              />
              <span> 0项商品-¥0.00 </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航2实现-->
    <div class="nav">
      <div class="container">
        <!-- <el-breadcrumb separator=""  class="w">
          <el-breadcrumb-item :to="{ path: '/kitchen' }"
            >厨房用品</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/blog' }">博客</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/news' }">新闻</el-breadcrumb-item>
        </el-breadcrumb> -->
        <router-link :to="{ name: 'Kitchen' }" class="nav-sub">厨房用品</router-link>
        <router-link :to="{ name: 'Blog' }" class="nav-sub" >博客</router-link>
        <router-link :to="{ name: 'News' }" class="nav-sub">新闻</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style/reset";
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
  // line-height: 122px;
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
.nav .container .nav-sub{
  color: #ffe5dd;
  font-size: 12px;
  margin-right: 20px;
  height: 40px;
  display: inline-block;
}

.nav .container .nav-sub:hover{
  background-color: royalblue;
}
</style>

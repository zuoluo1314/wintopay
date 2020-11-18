<template>
  <div class="topBar">
    <!-- 顶部和导航实现 -->
    <div class="container">
      <div class="left">
        <a href="#" class="moy">
          <el-row class="block-col-2">
            <el-col :span="12">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  ¥货币<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus"
                    >English</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-plus"
                    >简体中文</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-circle-plus-outline"
                    >繁體中文</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </a>

        <a href="#" class="lge">
          <img src="../assets/images/语言.png" style="width: 15px" />
          <span>语言</span>
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
        <a href="#" class="">
          <img
            src="../assets/images/会员.png"
            style="width: 15px"
            height="15px"
          />
          <span>会员账户</span>
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style/reset";
.topBar {
  width: 100%;
  height: 69px;
  background-color: #eeeeee;
}

.container {
  width: 1226px;
  height: 69px;
  margin-left: 65px;
}

.topBar .container .left {
  width: 240px;
  height: 69px;
  line-height: 69px;
}

.topBar .container .left .moy {
  margin-right: 40px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
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
  width: 761px;
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
}
</style>

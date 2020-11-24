<template>
  <div class="home">
    <!-- 轮播图：组件走马灯 -->
    <div class="banner">
      <span class="w">1</span>
      <el-carousel indicator-position="outside" height="580px">
        <el-carousel-item v-for="(item, i) in banner" :key="i">
          <img
            v-if="item.picUrl"
            class="img1"
            :src="item.picUrl"
            width="1226px"
            height="580px"
          />
          <!-- <img v-if="item.picUrl2" class="img2 a" :src="item.picUrl2" alt /> -->
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 特色商品 -->
    <div class="title">
      <h2>特色商品</h2>
    </div>
    <div class="good" v-for="(item, index) in homeList" :key="index">
      <el-row class="good-item" v-if="item.type === 1">
        <el-col  v-for="(o, i) in item.panelContents" :key="i" class="good-item1">
          <el-card :body-style="{ padding: '0px' }">
            <div class="good-img">
              <a href="#">
                <img
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  class="image"
                />
              </a>
            </div>
            <h4 class="good-title">商品标题</h4>
            <h6 class="sub-title">副标题</h6>
            <div class="good-price">
              <span>¥</span>
            </div>
            <div class="good-btn">
              <a href="#" class="good-shop">
                <img src="@/assets/images/购物车.png" alt="" />
                加入购物车
              </a>
              <a href="#" class="good-col">
                <img src="@/assets/images/收藏.png" alt="" />
              </a>
              <a href="#" class="good-com">
                <img src="@/assets/images/对比.png" alt="" />
              </a>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [],
      homeList: [],
    };
  },
  async created() {
    try {
      // 2.发起请求
      const res = await this.$http.get('/api/goods/home');
      const datas = res.data;
      if (datas.code === 200) {
        const results = datas.result;
        this.homeList = results;
        // 获取轮播图的数据
        const items = results.find((item) => item.type === 0);
        this.banner = items.panelContents;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/reset";
//轮播图
.banner .w {
  color: white;
}

//特色商品star
.good {
  width: 1226px;
  // height: 470px;
  background-color: white;
}

.title {
  width: 100%;
  height: 22px;
  color: black;
  font-size: 21px;
}

.good .good-item{
  width: 1226px;
  height: 470px;
}

.good .good-item1 {
  width: 306px;
  height: 443px;
  margin-top: 15px;
}

.good .good-item .good-img {
  width: 260px;
  height: 200px;
  margin-left: 20px;
}

.good .good-item .good-img .image {
  width: 260px;
  height: 200px;
}

.good .good-item .good-title {
  color: #23a1d1;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 20px;
}

.good .good-item .sub-title {
  width: 220px;
  height: 100px;
  margin-top: 10px;
  margin-left: 20px;
}

.good .good-item .good-price {
  width: 220px;
  height: 20px;
  margin-top: 10px;
  margin-left: 20px;
  color: #444;
  font-size: 14px;
}

.good .good-item .good-btn {
  width: 260px;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  text-align: center;
}

.good .good-item .good-btn a {
  display: inline-block;
}

.good .good-item .good-btn a:hover {
  background-color: gray;
}

.good .good-item .good-btn img {
  width: 15px;
  height: 15px;
}

.good .good-item .good-btn .good-shop {
  width: 156px;
  height: 40px;
  color: #444;
}

.good .good-item .good-btn .good-col {
  width: 52px;
  height: 40px;
}

.good .good-item .good-btn .good-com {
  width: 52px;
  height: 40px;
}
</style>

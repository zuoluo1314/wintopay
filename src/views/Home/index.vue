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
        <el-col  v-for="(goods, i) in item.panelContents" :key="i" class="good-item1">
          <el-card :body-style="{ padding: '0px' }">
            <div class="good-img">
              <a>
                <img v-lazy='goods.productImageBig' alt="">
              </a>
            </div>
            <h4 class="good-title">{{goods.productName}}</h4>
            <h6 class="sub-title">{{goods.subTitle}}</h6>
            <div class="good-price">
              <span>¥</span>
              {{Number(goods.salePrice).toFixed(2)}}
              <s>¥2</s>
            </div>
            <!-- 购物车2：购物车按钮样式实现 -->
            <div class="good-btn">
                <el-button
                size="medium"
                class="good-shop"
                @click="addCart(goods.productId,goods.salePrice,goods.productName,goods.productImageBig,goods.productNum)"
              >
              <img src="@/assets/images/购物车.png" alt="" />
              加入购物车
              </el-button>
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

    <!-- 固定定位 -->
    <div class="contact" v-if="isShop">
      <button class="btn" @click="changeClick()" value="true">
        <img src="@/assets/images/右箭头.png" alt="" class="btn-img">
      </button>
      <div class="contact-info">
        <p class="service">
          在线客服
        </p>
        <ul class="q">
          <li>
            <a href="#">
              <img src="@/assets/images/QQ.png" alt="">
              销售
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/QQ.png" alt="">
              技术支持
            </a>
          </li>
        </ul>
        <p class="tel">
            客服电话<br><br>
            18888888888 <br><br>
            微信二维码
        </p>
        <img src="@/assets/images/二维码.png" alt="" class="code">
      </div>
    </div>

    <div class="contact-btn">
      <button class="btn" @click="changeClick()">
        <img src="@/assets/images/左箭头.png" alt="" class="btn-img">
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      banner: [],
      homeList: [],
      isShop: true,
      feaItem: '',
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
        // 获取特色商品   js中如何使用循环
        results.forEach((feaItem) => {
          if (feaItem.type === 1) {
            this.feaItem = feaItem.panelContents;
          }
        });
        console.log(this.feaItem);
        // 传送数据到store4：将特色商品数据传送到store
        this.$store.dispatch('FEAITEM', this.feaItem);
        // 获取轮播图的数据
        const items = results.find((item) => item.type === 0);
        this.banner = items.panelContents;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  // 获取vuex中登录状态 记住先导入mapState, mapMutations
  computed: {
    ...mapState(['login']),
    // 传送数据到store3:导入获取特色商品函数
    ...mapMutations(['ADDCART', 'FEAITEM']),
  },
  methods: {
    changeClick() {
      this.isShop = !this.isShop;
    },
    // 购物车5:将添加购物商品信息传给vuex中
    addCart(id, price, name, img, num) {
      if (this.login) {
        // 用户已登录
        // this.$http.post("/api/addCart", {
        //   userId: getStore("id"),
        //   productId:id,
        //   productNum:1
        // });
        // 已经存储到后端中， 将当前的商品存储到store的cartList
        this.$store.commit('ADDCART', {
          productId: id,
          salePrice: price,
          productName: name,
          productImageBig: img,
          productNum: num,
        });
      } else {
        // 如果用户未登录 跳转到登录页面
        this.$router.push({ path: '/login' });
        // this.$store.commit('ADDCART', {
        //   productId: id,
        //   salePrice: price,
        //   productName: name,
        //   productImageBig: img,
        //   productNum: num,
        // });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/reset";
* {
  padding: 0;
  margin: 0;
}
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
  text-decoration: line-through;
}

.good .good-item .good-btn {
  width: 260px;
  height: 40px;
  background-color: #eee;
  line-height: 40px;
  text-align: center;
  margin-left: 20px;
}

.good .good-item .good-btn .good-shop{
  background-color: #eee;
}

.good .good-item .good-btn .good-shop:hover{
  background-color: gray;
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
//特色商品end

//固定联系star
.contact{
  position: fixed;
  bottom: 60px;
  right: 0;
  float: right;
  z-index: 1001;
}

.contact-btn{
  position: fixed;
  bottom: 359px;
  right: 0;
  z-index: 1000;
}

.contact-btn .btn{
  width: 50px;
  height: 45px;
  background-color: yellow;
}

.contact-btn .btn img{
  width: 15px;
  height: 15px;
}

.contact .btn{
  width: 50px;
  height: 45px;
  background-color: yellow;
  position: absolute;
  top: 0;
  left: -50px;
}

.contact .btn img{
  width: 15px;
  height: 15px;
}

.contact .contact-info{
  width: 170px;
  height: 344px;
}

.contact .contact-info .service{
  width: 170px;
  height: 45px;
  background-color: orange;
  line-height: 45px;
  color: white;
  padding-left: 10px;
}

.contact .contact-info .q{
  width: 170px;
  color: #23a1d1;
  background-color: white;
}

.contact .contact-info .q li{
  width: 170px;
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
  border: 0.5px solid gray;
}

.contact .contact-info .q a img{
  width: 30px;
  height: 34px;
}

.contact .contact-info p{
  width: 170px;
  height: 123px;
}

.contact .contact-info .tel{
  width: 170px;
  height: 123px;
  background-color: white;
  padding-left: 10px;
  border: 0.5px solid gray;
}

.contact .contact-info .code{
  width: 170px;
  height: 121px;
  background-color: gray;
}
</style>

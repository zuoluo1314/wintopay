<template>
  <!-- 搜索功能实现2：搜索数据页面展示 -->
  <div class="good">
    <p>搜索展示界面</p>
    <div class="good-item">
      <el-col v-for="(goods, i) in feaItem" :key="i" class="good-item1">
        <el-card :body-style="{ padding: '0px' }">
          <div class="good-img">
            <a>
              <img v-lazy="goods.productImageBig" alt="" />
            </a>
          </div>
          <h4 class="good-title">{{ goods.productName }}</h4>
          <h6 class="sub-title">{{ goods.subTitle }}</h6>
          <div class="good-price">
            <span>¥</span>
            {{ Number(goods.salePrice).toFixed(2) }}
            <s>¥2</s>
          </div>
          <div class="good-btn">
            <el-button
              size="medium"
              class="good-shop"
              @click="
                addCart(
                  goods.productId,
                  goods.salePrice,
                  goods.productName,
                  goods.productImageBig,
                  goods.productNum
                )
              "
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
    </div>
  </div>
</template>

<script>
// 搜索组件刷新持久化原理：当搜索组件刷新，组件完成前函数先执行，在组件完成函数在执行，在执行其他被挂载的组件，最后执行挂载完成的函数
import { mapState, mapMutations } from 'vuex';
import { setStore, getStore } from '@/utils/storage';

export default {
  data() {
    return {
      feaItem: '',
    };
  },
  computed: {
    // 从store中获取数据1：导入state中数据feaItem
    ...mapState(['login', 'jqueryList', 'cartList']),
    ...mapMutations(['ADDCART', 'INITBUYCART', 'INITJQUERYLIST']),
  },
  created() {
    // 搜索功能实现10:展示商品持久化-组件加载完毕，触发store中INITJQUERYLIST函数，获取本地搜索到的商品数据，记得导入INITJQUERYLIST
    this.$store.commit('INITJQUERYLIST');
    // 搜索功能实现6:展示组件中，接受搜索到的商品
    this.feaItem = this.jqueryList;
  },
  methods: {
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

.good .good-item {
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

.good .good-item .good-btn .good-shop {
  background-color: #eee;
}

.good .good-item .good-btn .good-shop:hover {
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
</style>

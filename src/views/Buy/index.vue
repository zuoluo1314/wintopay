<template>
  <!-- 结算2：结算组件页面实现 -->
  <div class="buyAddress">
    <!-- 收货地址实现：采用element-Dialog自定义内容 -->
    <div class="address">
      <h2>收获地址</h2>
      <p class="textadd">
        <!-- span标签设置是为了让添加收货地址居中，从而不影响ul列表样式展示在盒子里面，不至于挤出去 -->
        <span class="add-btn" v-if="form.isAddress">
          <el-button type="text" @click="dialogFormVisible = true"
          >添加收货地址</el-button
        >
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form" class="addForm">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号码" :label-width="formLabelWidth">
              <el-input v-model="form.iphone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" :label-width="formLabelWidth">
              <el-input v-model="form.address" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click='addAddress'
              >确 定</el-button
            >
          </div>
        </el-dialog>
        </span>
        <ul>
            <li>
                {{form.name}}
            </li>
            <li>
                {{form.iphone}}
            </li>
            <li>
                {{form.address}}
            </li>
        </ul>
      </p>
    </div>
    <hr>
    <!-- 商品详情 -->
    <div class="goods">
      <ul>
        <li v-for="(goods,index) in cartList" :key='index'>
          <span class="item-img">
                      <img :src="goods.productImageBig" alt="">
                    </span>
                    <span class="item-title">
                        <a :href="goods.productImageBig">{{goods.productName}}</a>
                    </span>
                    <span>
                      x{{goods.productNum}}
                    </span>
                    <span>
                      ${{goods.salePrice}}
                    </span>
                    <span>
                      <a href="#" class="del" @click="del(index)">删除</a>
                    </span>
        </li>
      </ul>
    </div>
    <hr>
    <h2>配送方式：包邮</h2>
    <hr>
    <div class="buyCode">
      <h2>请扫码支付</h2>
      <img src="@/assets/images/二维码.png">
    </div>
    <span class="price">
      总价格：{{ totalPrice }}元
      <el-button type="primary" @click="pay">支付完成</el-button>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getStore, removeStore, setStore } from '@/utils/storage';

export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        iphone: '',
        address: '',
        isAddress: true,
      },
      formLabelWidth: '120px',
    };
  },
  computed: {
    ...mapState(['cartList']),
    // 计算总价格
    totalPrice() {
      return this.cartList.reduce((total, item) => {
        let obj = total;
        obj += item.productNum * item.salePrice;
        return obj;
      }, 0);
    },
  },
  methods: {
    addAddress() {
      // 第一步做校验，判断输入框是否输入值和格式是否正确
      // 第二步，改变isAddress为false，将收获信息展示出来
      this.form.isAddress = false;
      this.dialogFormVisible = false;
      // 网页刷新当前页面
      // window.location.reload();
    },
    del(id) {
      // 第一步取到当前本地储存的购物车数据
      const initCart = localStorage.getItem('buyCart');
      // 第二步数据进行解析转为对象   此时initDate为一个数组包裹的数据为对象
      const initData = JSON.parse(initCart);
      // 第三步数据进行删除顾头不够尾，返回的initDate是删除之后留下的数据
      initData.splice(id, id + 1);
      // 第四步删除后的购物车数据到本地，进行先转化为json格式
      const initDatas = JSON.stringify(initData);
      setStore('buyCart', initDatas);
      // 第五步记得刷新跳转到首页，进行数据更新网页刷新当前页面
      window.location.reload();
    },
    pay() {
      alert('感谢亲的支持，你的宝贝正在飞速处理中，么么哒');
    },
  },
};
</script>

<style lang="scss" scoped>
// 导入重置样式
@import url('../reset.css');
// 收货start
.buyAddress {
  margin: 0 auto;
  width: 1226px;
}

.textadd {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}

.textadd .add-btn {
  display: inline-block;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
}

.addForm {
  margin-top: -100px;
}

.dialog-footer {
  margin-top: -100px;
}

.price {
  margin-left: 1000px;
}

.buyCode img {
  width: 100px;
  height: 100px;
}
</style>

<template>
<!-- 登录2：登录组件样式实现 -->
  <div class="login">
    <div class="box">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="user">
          <el-input
            type="text"
            v-model="ruleForm.user"
            autocompconste="off"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocompconste="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button>返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 数据持久化2：导入配置
import { setStore, getStore, removeStore } from '@/utils/storage';
import axios from 'axios';

export default {
  data() {
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        user: '',
        pass: '',
      },
      rules: {
        user: [{ validator: validateUser, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
      },
      cart: [],
    };
  },
  methods: {
    // 登录9 完成提交登录操作，前提完成登录和验证接口、数据持久化
    submitForm(formName) {
      // this.$refs[formName]  获取整个form实例对象，调用验证方法
      this.$refs[formName].validate(async (valid) => {
        // valid 表示是否验证成功 成功true
        if (valid) {
          // 获取用户名和密码
          // const {user,pass} = this.ruleForm;
          const res = await this.$http.post('/api/login', this.ruleForm);
          // res后端返回的数据
          if (res.data.code === 200) {
            const { username, token, id } = res.data;
            //  数据持久化3 持久化 存储
            setStore('token', token);
            setStore('id', id);
            setStore('user', username);
            // 将数据提交给vuex，改变login的真假值和获取userinfo信息
            axios.post('/api/validate', {}).then((ress) => {
              const datas = ress.data;
              this.$store.commit('ISLOGIN', datas);
            });

            if (this.cart && this.cart.length) {
              this.cart.forEach(async (item) => {
                const ress = await this.$http.post('/api/addCart', item);
                if (ress.data.success === true) {
                  // .......
                }
                removeStore('buyCart');
                this.$router.push({ path: '/' });
              });
            } else {
              this.$router.push({ path: '/' });
            }
          }
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

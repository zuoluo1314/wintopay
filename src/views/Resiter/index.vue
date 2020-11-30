<template>
  <div>
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>账户</el-breadcrumb-item>
        <el-breadcrumb-item>注册</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h1>注册账号</h1>
    <h4>
      欢迎来到我们网站，如果您是新会员，请填写下面的表单进行注册。如果您已经是本站的会员，请您直接
      <router-link :to="{ name: 'Login' }">登录</router-link>
    </h4>
    <div class="resiter-info">
      <el-tabs type="border-card">
        <el-tab-pane label="邮箱注册">
          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="E-Mail"
              prop="age"
              :rules="[{ required: true, message: '邮箱不能为空' }]"
            >
              <el-input
                type="age"
                v-model.number="numberValidateForm.age"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>

          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="姓名"
              prop="age"
              :rules="[{ required: true, message: '姓名不能为空' }]"
            >
              <el-input
                type="age"
                v-model.number="numberValidateForm.age"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>

          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="密码"
              prop="age"
              :rules="[{ required: true, message: '密码不能为空' }]"
            >
              <el-input
                type="age"
                v-model.number="numberValidateForm.age"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>

          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="确认密码"
              prop="age"
              :rules="[{ required: true, message: '密码不能为空' }]"
            >
              <el-input
                type="age"
                v-model.number="numberValidateForm.age"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="手机号注册">
          <el-form
            :model="numberValidateForm"
            ref="numberValidateForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="E-Mail"
              prop="age"
              :rules="[{ required: true, message: '邮箱不能为空' }]"
            >
              <el-input
                type="age"
                v-model.number="numberValidateForm.age"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <h3>订阅咨询</h3>
        <hr />
        <span>订阅</span>
        <el-radio v-model="radio" label="1">是</el-radio>
        <el-radio v-model="radio" label="2">否</el-radio>
        <h3>验证码</h3>
        <el-form
          :model="numberValidateForm"
          ref="numberValidateForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item
            label="输入验证码"
            prop="age"
            :rules="[{ required: true, message: '验证码不能为空' }]"
          >
            <el-input
              type="age"
              v-model.number="numberValidateForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <!-- <Code></Code> -->
        <div class="ver">
          <span>5dcf60</span>
        </div>
        <div class="pull-right">
          <span>
            我已经阅读并同意 <a href="#">隐私政策</a>条款
          </span>
          <input type="checkbox">
          <input type="submit" value="继续" class="btn btn-primary">
        </div>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// import Code from '@/common/Code.vue';

export default {
  data() {
    return {
      numberValidateForm: {
        age: '',
      },
      radio: '1',
    };
  },
  components: {
    // Code,
  },
};
</script>

<style lang="scss" scoped>
#code {
  width: 100px;
  height: 100px;
  background-color: #ddd;
  padding: 10px;
  line-height: 100px;
  text-align: center;
  font-size: 20px;
  color: red;
  font-weight: bold;
}
input {
  outline: none;
}
.ver{
  width: 100px;
  height: 30px;
  border:1px solid black;
  margin-left: 100px;
  text-align: center;
  line-height: 30px;
}
.pull-right{
  width: 310px;
  height: 33px;
  float: right;
  line-height: 33px;
}

.pull-right .btn{
  width: 50px;
  height: 33px;
  background-color:#229ac8;
  color: white;
}
</style>

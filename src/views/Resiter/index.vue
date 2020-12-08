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
    <!-- 注册1：样式实现-采用tag标签页选项卡样式实现邮箱注册和手机注册分离-->
    <div class="resiter-info">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="邮箱注册" name="first">
          <form action="">
            <label>Mail:</label>
            <input
              type="text"
              placeholder="请输入邮箱"
              v-model="Mail"
              @blur="getMail"
            />
            <span>{{ mesMail }}</span>

            <!-- @blur 输入框失焦触发的函数 -->
            <label>用户名:</label>
            <input
              type="text"
              placeholder="请输入用户名"
              v-model="user"
              @blur="getUser"
            />
            <span>{{ mesUser }}</span>

            <label>密码:</label>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="pass"
              @blur="getPass"
            />
            <span>{{ mesPass }}</span>

            <label>确认密码:</label>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="repass"
              @blur="getRepass"
            />
            <span>{{ mesRepass }}</span>
            <!-- 验证码1：样式实现 -->
            <label class="resiter-code">
              验证码:
              <span>{{ code }}</span>
              <span @click="load">刷新</span>
            </label>
            <input
              type="text"
              placeholder="请输入验证码"
              v-model="code1"
              @blur="getCode"
            />
            <span>{{ mesCode }}</span>
          </form>
          <input
            type="submit"
            value="注册"
            class="btn btn-primary"
            @click="registerHandle"
          />
        </el-tab-pane>
        <el-tab-pane label="手机注册" name="second">
          <form action="">
            <label>手机号:</label>
            <input
              type="text"
              placeholder="请输入手机号"
              v-model="iphone"
              @blur="getIphone"
            />
            <span>{{ mesIphone }}</span>

            <label>
              <a href="#" style="">获取手机验证码</a>
            </label>
            <input
              type="text"
              placeholder="请输入手机验证码"
              v-model="iphoneCode"
              @blur="getIphoneCode"
            />
            <span>{{ mesIphoneCode }}</span>
          </form>
          <input
            type="submit"
            value="注册"
            class="btn btn-primary"
            @click="registerIphone"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// import Code from '@/common/Code.vue';
// 注册3：导入md5，对密码进行加密  先安装cnpm install blueimp-md5和npm i -S blueimp-md5
import md5 from 'blueimp-md5';
import axios from 'axios';

export default {
  data() {
    return {
      Mail: '',
      user: '',
      pass: '',
      repass: '',
      mesMail: '',
      mesUser: '',
      mesPass: '',
      mesRepass: '',
      radio: '1',
      iphone: '',
      code: '',
      code1: '',
      mesIphone: '',
      mesCode: '',
      // 保证没有输入任何值的情况下，不会注册成功
      errorMail: false,
      erroruser: false,
      errorpass: false,
      errorrepass: false,
      errorcode: false,
    };
  },
  components: {
    // Code,
  },
  methods: {
    // 注册2：做表单校验
    getMail() {
      if (!this.Mail) {
        this.mesMail = '邮箱不能为空';
      } else {
        this.mesMail = '';
        this.errorMail = true;
      }
    },

    getUser() {
      if (!this.user) {
        this.mesUser = '用户名不能为空';
      } else {
        this.mesUser = '';
        this.erroruser = true;
      }
    },

    // 校验密码输入是否符合要求：密码至少包含小写字母、大写字母和数字且长度为6到14位
    getPass() {
      const pat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,14}$/;
      if (!this.pass) {
        this.mesPass = '密码不能为空';
      } else if (!pat.test(this.pass)) {
        this.mesPass = '密码至少包含小写字母、大写字母和数字且长度不能低于六位';
      } else {
        this.mesPass = '';
        this.errorpass = true;
      }
    },

    getRepass() {
      if (!this.repass) {
        this.mesRepass = '请再次输入密码';
      } else if (this.repass !== this.pass) {
        this.mesRepass = '前后密码不一致';
      } else {
        this.mesRepass = '';
        this.errorrepass = true;
      }
    },

    // 验证码2：验证码校验
    getCode() {
      if (this.code1 === this.code) {
        this.mesCode = '';
        this.errorcode = true;
      } else {
        this.mesCode = '验证码输入错误';
      }
    },

    random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    // 验证码3获取  先定义random随机函数
    load() {
      const codeLength = 4;
      const randomCode = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'S',
        'Y',
        'Z',
      ];
      this.code = '';
      for (let i = 0; i < codeLength; i += 1) {
        // 设置随机范围0~36
        const index = this.random(0, 36);
        this.code += randomCode[index];
      }
    },

    // 注册4：声明注册的函数
    async registerHandle() {
      if (this.errorMail && this.erroruser && this.errorpass && this.errorrepass && this.errorcode) {
        alert('注册成功');
        // 完成注册，信息填写完毕
        // 将注册信息，提交到后台 密码通过md5加密
        axios.post('/api/register', {
          mail: this.mail,
          user: this.user,
          pass: md5(this.pass),
          repass: md5(this.repass),
        });
        this.$router.push({ path: '/login' });
      } else {
        alert('请按要求填写全部信息');
      }
    },
    // 手机号校验 手机号规则第一位为1 第二位为3-9 后面9为 \d为任意数字
    getIphone() {
      const re = /^1[3-9]\d{9}$/;
      if (re.test(this.iphone)) {
        this.mesIphone = '';
      } else {
        this.mesIphone = '请输入正确的手机号';
      }
    },

    // 手机验证码：声明提交函数
    registerIphone() {
      if (!this.mesIphone) {
        alert('注册完成');
        this.$router.push({ path: '/login' });
      } else {
        alert('请按要求填写全部信息');
      }
    },
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
.ver {
  width: 100px;
  height: 30px;
  border: 1px solid black;
  margin-left: 100px;
  text-align: center;
  line-height: 30px;
}
.pull-right {
  width: 310px;
  height: 33px;
  float: right;
  line-height: 33px;
}

.pull-right .btn {
  width: 50px;
  height: 33px;
  background-color: #229ac8;
  color: white;
}

.container {
  width: 600px;
  /* border: 1px solid grey; */
  padding: 20px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 15px;
}
span {
  font-size: 12px;
  color: red;
}
button {
  margin-left: 100px;
}

a {
  text-decoration: none;
}
</style>

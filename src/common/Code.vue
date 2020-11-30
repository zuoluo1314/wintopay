<template>
  <div class="form-group" style="display: flex">
    <div>
      <span>验证码：</span>
      <input
        type="text"
        id="code"
        v-model="code"
        class="code"
        placeholder="请输入您的验证码"
      />
    </div>
    <div class="login-code" @click="refreshCode">
      <!--验证码组件-->
      <s-identify :identifyCode="identifyCode"></s-identify>
    </div>
  </div>
</template>

<script>
import SIdentify from '@/components/sidentify.vue';

export default {
  data() {
    return {
      identifyCodes: '1234567890',
      identifyCode: '',
      code: '',
    //   text框输入的验证码
    };
  },
  components: { SIdentify },
  mounted() {
    this.identifyCode = '';
    this.makeCode(this.identifyCodes, 4);
  },
  created() {
    this.refreshCode();
  },
  //   验证码
  randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  refreshCode() {
    this.identifyCode = '';
    this.makeCode(this.identifyCodes, 4);
  },
  makeCode(o, l) {
    for (let i = 0; i < l; i = +1) {
      this.identifyCode += this.identifyCodes[
        this.randomNum(0, this.identifyCodes.length)
      ];
    }
    console.log(this.identifyCode);
  },
};
</script>

<style lang="scss" scoped>
/*验证码样式*/
.code {
  width: 124px;
  height: 31px;
  border: 1px solid rgba(186, 186, 186, 1);
}
.login-code {
  cursor: pointer;
}
</style>

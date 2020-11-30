<template>
  <div>
    <MHeader></MHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import MHeader from '@/common/MHeader.vue';
import Footer from '@/common/Footer.vue';

export default {
  components: {
    MHeader,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>

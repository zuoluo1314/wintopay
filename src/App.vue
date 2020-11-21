<template>
  <div>
    <MHeader></MHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from '@/common/MHeader.vue';

export default {
  components: {
    MHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>

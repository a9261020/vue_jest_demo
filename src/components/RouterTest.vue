<template>
  <!-- 路由跳转的單元測試 -->
  <div class="example router">
    <h2 class="example_title">路由跳轉的單元測試</h2>
    <app-button size="lg" @click="goVIPs">跳轉到VIP用戶頁面</app-button>
  </div>
</template>
<script>
export default {
  name: "RouterTest",
  methods: {
    goVIPs() {
        this.$router.push({
          path: "/vips",
        });
    },
  },
};
</script>
<style scoped>
</style>

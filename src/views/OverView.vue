<template>
  <div>
    <h1 class="title">this is overview</h1>
    <filter-test />
    <axios-test />
    <router-test />
    <vuex-test />
  </div>
</template>
<script>
export default {
  name: "OverView",
  components: {
    FilterTest: () => import("@/components/FilterAddWatchTest"),
    AxiosTest: () => import("@/components/AxiosTest"),
    RouterTest: () => import("@/components/RouterTest"),
    VuexTest: () => import("@/components/VuexTest"),
  },
};
</script>
<style scoped>
</style>

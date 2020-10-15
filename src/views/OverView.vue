<template>
  <div>
    <h1 class="title">this is overview</h1>
    <filter-test />
    <hello-world />
  </div>
</template>
<script>
export default {
  name: "OverView",
  components: {
    HelloWorld: () => import("@/components/HelloWorld"),
    FilterTest: () => import("@/components/FilterAddWatchTest"),
  },
};
</script>
<style scoped>
</style>

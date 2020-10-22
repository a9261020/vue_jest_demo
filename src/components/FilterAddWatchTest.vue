<template>
  <!-- filter的單元測試 -->
  <div class="example filter">
    <h2 class="example_title">filter和watch的單元測試</h2>
    <el-input
      class="input"
      v-model="userInput"
      placeholder="輸入長度大於7的內容，下方將顯示過濾後內容"
    ></el-input>
    <div v-show="toggleShow" class="text format">
      {{ userInput | formatText }}
    </div>
    <div v-show="!toggleShow" class="text noformat">{{ userInput }}</div>
    <app-button @click="changeShow">切換顯示方式</app-button>
  </div>
</template>
<script>
export default {
  name: "FilterTest",
  data() {
    return {
      userInput: "",
      toggleShow: true,
    };
  },
  filters: {
    formatText: function (value) {
      // console.log(value)
      if (!value) return "";
      if (value.length > 7) {
        let frontVal = value.slice(0, 2);
        let endVal = value.slice(value.length - 2, value.length);
        return frontVal + "..." + endVal;
      } else {
        return value;
      }
    },
  },
  methods: {
    changeShow() {
      this.toggleShow = !this.toggleShow;
    },
  },
  // watch 的test用例
  watch: {
    toggleShow(newValue) {
      console.log(newValue);
    },
  },
};
</script>
<style scoped>
</style>

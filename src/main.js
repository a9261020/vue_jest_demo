import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/main.css";
import "@/assets/css/color-dark.css";
import AppButton from "@/basics/AppButton";
Vue.use(ElementUI);

Vue.component("AppButton", AppButton);

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

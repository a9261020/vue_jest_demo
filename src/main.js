import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import AppButton from "@/basics/AppButton";
Vue.use(ElementUI);

Vue.component("AppButton", AppButton);

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home.vue"),
      children: [
        {
          path: "/",
          name: "Layout",
          component: () => import("@/views/OverView.vue"),
        },
      ],
    },
  ],
});

export default router;

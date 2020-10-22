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
          name: "home",
          component: () => import("@/views/OverView.vue"),
        },
        {
          path: "/overview",
          name: "OverView",
          component: () => import("@/views/OverView.vue"),
        },
        {
          path: "/vips",
          name: "vips",
          component: () => import("@/views/VIPs.vue"),
        },
        {
          path: "/users",
          name: "users",
          component: () => import("@/views/Users.vue"),
        },
      ],
    },
  ],
});

export default router;

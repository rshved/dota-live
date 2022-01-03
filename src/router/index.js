import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "@/pages/mainPage.vue";
import PreviousMatches from "@/components/previousMatches.vue";
import LiveMatches from "@/components/liveMatches.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: MainPage,
    children: [
      {
        path: "/previousmatches",
        name: "PreviousMatches",
        component: PreviousMatches,
      },
      { path: "/livematches", name: "LiveMatches", component: LiveMatches },
    ],
  },
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

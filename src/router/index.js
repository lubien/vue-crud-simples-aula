import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tasks/:id",
    name: "ShowTask",
    component: () =>
      import(/* webpackChunkName: "showTask" */ "../views/ShowTask.vue")
  },
  {
    path: "/create",
    name: "CreateTask",
    component: () =>
      import(/* webpackChunkName: "createTask" */ "../views/CreateTask.vue")
  },
  {
    path: "/edit/:id",
    name: "EditTask",
    component: () =>
      import(/* webpackChunkName: "editTask" */ "../views/EditTask.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/Gallery.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

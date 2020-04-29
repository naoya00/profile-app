import Vue from 'vue';
import Router from 'vue-router';
import Top from './views/Top.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{path: "/", component: Top}, {path: "/about", component: About}]
})
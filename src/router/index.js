import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello.vue';
import Login from '../components/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/login',
      name: 'Sign in',
      component: Login,
    },
  ],
});

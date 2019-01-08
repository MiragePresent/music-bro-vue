import Vue from 'vue';
import Router from 'vue-router';
import Guard from './guard';
import Hello from '../components/Hello.vue';
import Login from '../components/Login.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Hello,
      meta: {
        middleware: ['auth'],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        middleware: ['guest'],
      },
    },
  ],
});

router.beforeEach((to, from, next) => (new Guard(to, from, next)).handle());

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters['auth/isAuthenticated']) {
//       next({ path: '/login', params: { nextUrl: to.fullPath } });
//     } else {
//       next();
//     }
//     // else {
//     //   const user = JSON.parse(localStorage.getItem('user'));
//     //   if (to.matched.some(record => record.meta.is_admin)) {
//     //     if (user.is_admin === 1) {
//     //       next();
//     //     } else {
//     //       next({ name: 'userboard'});
//     //     }
//     //   } else {
//     //     next();
//     //   }
//     // }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (!store.getters['auth/isAuthenticated']) {
//       next();
//     } else {
//       next({ name: 'home' });
//     }
//   } else {
//     next();
//   }
// });

export default router;

import store from '../../store';

export default {
  auth: {
    redirectTo: 'login',
    check() {
      return store.getters['auth/isAuthenticated'];
    },
  },
  guest: {
    redirectTo: 'home',
    check() {
      return !store.getters['auth/isAuthenticated'];
    },
  },
};

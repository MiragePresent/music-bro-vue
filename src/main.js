// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueApollo from 'vue-apollo';
import Vuetify from 'vuetify';

import router from './router';
import App from './App.vue';
import store from './store';
import theme from './theme';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(VueApollo);
Vue.use(Vuetify, { theme });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import VueApollo from 'vue-apollo';
import Vuetify from 'vuetify';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import router from './router';
import App from './App.vue';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

const link = new HttpLink({
  uri: 'https://playing-with-lumen.test/graphql',
});

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.use(VueApollo);
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  apolloProvider,
});

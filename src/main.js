// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App'
import router from './router'

import ApolloCLient from 'apollo-client'
import HttpLink from 'apollo-link-http'
import InMemoryCache from 'apollo-cache-inmemory'

Vue.config.productionTip = false

const link = new HttpLink({
  uri: 'https://playing-with-lumen.test/graphql'
})

const apolloClient = new ApolloCLient({
  link,
  cache: new InMemoryCache()
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(VueApollo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  apolloProvider
})

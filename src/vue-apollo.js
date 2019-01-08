import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

/* eslint-disable-next-line  */
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client';
// import { createApolloClient, restartWebsockets } from 'vue-cli-plugin-apollo/graphql-client';

// Install the vue plugin
Vue.use(VueApollo);

// Name of the localStorage item
const AUTH_TOKEN = 'apollo-token';

const baseUrl = 'https://playing-with-lumen.test';

// Http endpoint
const httpEndpoint = `${baseUrl}/graphql`;
const httpLink = createHttpLink({
  uri: httpEndpoint,
  credentials: 'same-origin',
});

const accessToken = localStorage.getItem('accessToken');
const authLink = setContext((_, { headers }) => Object.assign(
  headers,
  { authorization: accessToken ? `Bearer ${accessToken}` : '' },
));

Vue.prototype.$filesRoot = baseUrl;

// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  // httpEndpoint,
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  // wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:4000/graphql',
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  link: authLink.concat(httpLink),

  // Override default cache
  // cache: myCache

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};

// Create apollo client
const { apolloClient } = createApolloClient(defaultOptions);

export default apolloClient;

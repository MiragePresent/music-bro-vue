import apolloClient from '../../vue-apollo';
import { JWS_TOKEN_ISSUE_MUTATION } from '../../graphql/schema';
import { TOKEN_ISSUE } from './types';

export default {
  getToken({ commit }, { username, password }) {
    apolloClient.mutate({
      mutation: JWS_TOKEN_ISSUE_MUTATION,
      variables: {
        data: {
          username,
          password,
          clientId: 2,
          clientSecret: 'ymzoA1XMXfGlWdBaV4gQ7TG0oDrmRIFWKES12dC8',
          grantType: 'password',
        },
      },
    }).then(({
      data: {
        authenticate: {
          accessToken, refreshToken, expiresIn, tokenType,
        },
      },
    }) => {
      const expirationTime = (new Date()).getTime() + expiresIn;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('expirationTime', expirationTime);
      localStorage.setItem('tokenType', tokenType);
      commit(TOKEN_ISSUE, {
        accessToken,
        refreshToken,
        expirationTime,
        tokenType,
      });
    });
  },
};

import { TOKEN_ISSUE } from './types';

export default {
  [TOKEN_ISSUE](state, {
    accessToken, refreshToken, expirationTime, tokenType,
  }) {
    Object.assign(state, {
      accessToken,
      refreshToken,
      expirationTime,
      tokenType,
    });
  },
};

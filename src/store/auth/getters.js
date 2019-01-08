export default {
  accessToken: state => state.accessToken,
  refreshToken: state => state.refreshToken,
  expirationTime: state => state.expirationTime,
  tokenType: state => state.tokenType,
  isAuthenticated: state => state.accessToken && (new Date()).getTime() < state.expirationTime,
};

import gql from 'graphql-tag';

export const JWS_TOKEN_ISSUE_MUTATION = gql`mutation issueToken ($data: TokenRequest!) {
    authenticate(data: $data) {
        accessToken
        refreshToken
        expiresIn
        tokenType
    }
}`;

export default {
  JWS_TOKEN_ISSUE_MUTATION,
};

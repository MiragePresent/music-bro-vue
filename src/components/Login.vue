<template>
    <v-content>
        <v-form>
            <v-text-field
                v-model="username"
                name="username"
                label="Username"
            />
            <v-text-field
                v-model="password"
                name="password"
                type="password"
                label="Password"
            />
            <v-btn
                color="success"
                type="button"
                @click="auth"
            >Sing In
            </v-btn>
        </v-form>
    </v-content>
</template>

<script>
  import { gql } from 'vue-apollo'

  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: '',
        clientId: 2,
        clientPassword: 'ymzoA1XMXfGlWdBaV4gQ7TG0oDrmRIFWKES12dC8',
      }
    },
    methods: {
      auth: () => {
        const {username, password, clientId, clientSecret} = this
        const grantType = 'password'

        console.log(this.$apolloProvider);

        this.$apollo.mutate({
          mutation: gql`mutation($data: AuthData!) {
            tokenIssue(data: $data) {
                accessToken
                refreshToken
                expireIn
            }
          }`,
          variables: {
            data: {
              username,
              password,
              clientId,
              clientSecret,
              grantType
            }
          }
        }).then(data => {
          console.log(data)
        })
      }
    },
  }
</script>

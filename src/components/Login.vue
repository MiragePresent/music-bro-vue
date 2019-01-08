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
  import { JWS_TOKEN_ISSUE_MUTATION } from '../graphql/schema';

  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      auth(e) {
        e.preventDefault();
        console.log('sending...', JWS_TOKEN_ISSUE_MUTATION);

        const { username, password } = this;

        this.$apollo.mutate({
          mutation: JWS_TOKEN_ISSUE_MUTATION,
          variables: {
            data: {
              username,
              password,
              clientId: '2',
              clientSecret: 'ymzoA1XMXfGlWdBaV4gQ7TG0oDrmRIFWKES12dC8',
              grantType: 'password',
            },
          },
        }).then(data => {
        //   console.log(data);
        })
      }
    }
  }
</script>

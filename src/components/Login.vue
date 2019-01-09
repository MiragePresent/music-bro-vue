<template>
    <v-content>
        <v-container fluid>
            <v-layout>
                <v-flex class="xs12">
                    <h2 class="font-weight-medium">Login</h2>
                    <span style="color: #555">Some text description. It can make login form more friendly</span>
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
                                color="info"
                                type="button"
                                @click="auth"
                        >Sing In
                        </v-btn>
                    </v-form>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      ...mapActions('auth', ['getToken']),
      auth(e) {
        e.preventDefault();
        const {username, password} = this;
        this.getToken({ username, password });
        this.$router.replace('/');
      }
    }
  }
</script>

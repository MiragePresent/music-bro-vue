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

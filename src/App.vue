<template>
  <v-app light>
    <v-toolbar
        class="primary"
        app
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>Bro</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

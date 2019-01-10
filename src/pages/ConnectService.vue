<template>
    <v-container fluid>
        <v-layout row wrap>
            <h1 class="font-weight-medium page-title">Connect your music account</h1>
            <v-flex
                v-for="service in services"
                class="md6 xs12 service-card-box"
            >
                <v-card class="white--text" :class="`${service.name}-card-color`">
                    <v-layout>
                        <v-flex class="xs5">
                            <v-img
                                :src="service.logo"
                                height="150px"
                                contain
                            />
                        </v-flex>
                        <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">{{ service.title }}</div>
                                    <div>{{ service.description }}</div>
                                </div>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import services from '../services';

  export default {
    name: 'ConnectService',
    data() {
      return {
        services,
      }
    }
  }
</script>

<style scoped>
    .service-card-box {
        margin-bottom: 20px;
        border-radius: 10px;
    }
    .service-card{
        padding: 10px;
    }
    .page-title {
        padding: 10px 0 20px;
    }
    .spotify-card-color {
        background-color: #191414;
    }
    .apple-music-card-color {
        background: #fc644f;
        background: -moz-linear-gradient(-45deg, #fc644f 1%, #ee5cbf 51%, #4ec7f2 100%);
        background: -webkit-linear-gradient(-45deg, #fc644f 1%,#ee5cbf 51%,#4ec7f2 100%);
        background: linear-gradient(135deg, #fc644f 1%,#ee5cbf 51%,#4ec7f2 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fc644f', endColorstr='#4ec7f2',GradientType=1 )
    }
</style>

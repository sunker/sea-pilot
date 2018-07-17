<template>
  <v-layout column fluid>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12>
              <ble-connection></ble-connection>
            </v-flex>
            <v-flex xs6  @click="navigate('weather')">
              <v-card>
                <v-card-media :height="height + 'px'">
                  <v-container>
                    <weather-widget></weather-widget> 
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>

            <v-flex xs6>
              <v-card>
                <v-card-media :height="height + 'px'">
                  <v-container fill-height fluid>
                    <!-- <a @click="$router.push(({ name: 'CreateRoute', params: { name: 'test', id: 'rds-afads' } }))">test</a> -->
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>

            <v-flex xs12 @click="navigate('chart')">
              <v-card>
                <v-card-media :height="height + 'px'">
                  <v-container fill-height fluid>
                    <chart :display-zoom="false"></chart>
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
  </v-layout>
</template>

<script>
import Chart from './Chart'
import BleConnection from './BleConnection'
import WeatherWidget from './weather/WeatherWidget'
import bus from '../Bus'

export default {
  created: function() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    this.height = width > 520 ? 320 : this.height
  },
  mounted: async function() {
    bus.$on('mapClicked', () => this.$router.push('chart'))
  },
  data: () => ({
    height: 200,
    cards: [
      {
        title: 'Pre-fab homes',
        src: '/static/doc-images/cards/house.jpg',
        flex: 12,
      },
      {
        title: 'Favorite road trips',
        src: '/static/doc-images/cards/road.jpg',
        flex: 6,
      },
      {
        title: 'Best airlines',
        src: '/static/doc-images/cards/plane.jpg',
        flex: 6,
      },
    ],
  }),
  methods: {
    navigate(route) {
      this.$router.push(route)
    },
  },
  components: { Chart, WeatherWidget, BleConnection },
}
</script>

<style scoped>

</style>

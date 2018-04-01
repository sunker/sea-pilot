<template>
  <v-container fluid>
    <div class="chart-map" height="600">
      <div class="loading-feedback" v-if="initialized === null">
        <p class="text-center temp">Laddar sjökort...</p>
      </div>
      <div class="loading-feedback" v-if="initialized === false">
        <p class="text-center temp">Kan inte ansluta till Eniro</p>
      </div>
      <div v-if="displayZoom">
        <div class=" pull-right">
          <div class="btn-group-vertical">
            <div class="chart-center-buttons">
              <v-btn @click="panToCenter($event)" outline fab dark large color="black">
                <v-icon dark>my_location</v-icon>
              </v-btn>
            </div>
          </div>
          <v-flex xs12 sm6 class="chart-zoom-buttons">
            <div class="text-xs-center">
              <div>
                <v-btn @click="zoomIn($event)" color="black" large dark outline>
                  <v-icon>add</v-icon>
                </v-btn>
              </div>
              <div>
                <v-btn @click="zoomOut($event)" color="black" large dark outline>
                  <v-icon>remove</v-icon>
                </v-btn>
              </div>
            </div>
          </v-flex>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import Chart from '../models/Chart'
import { mapState } from 'vuex'

export default {
  mounted: function() {
    this.chart = new Chart(document.querySelector('.chart-map'))
    this.initialized = true
  },
  computed: {
    ...mapState(['coordinates']),
  },
  data() {
    return {
      initialized: false,
      displayZoom: true,
    }
  },
  methods: {
    panToCenter: function($event) {
      $event.stopPropagation()
      this.chart.panTo(this.coordinates.lat, this.coordinates.lng)
      this.chart.setAutoFocus(true)
    },
    zoomIn: function($event) {
      $event.stopPropagation()
      this.chart.zoomIn()
    },
    zoomOut: function($event) {
      $event.stopPropagation()
      this.chart.zoomOut()
    },
  },
  watch: {
    'coordinates.lat': function(newVal) {
      this.chart.setPositionMarker(this.coordinates.lat, this.coordinates.lng)
    },
    'coordinates.lng': function(newVal) {
      this.chart.setPositionMarker(this.coordinates.lat, this.coordinates.lng)
    }
  },
}
</script>

<style scoped>
.chart-map {
  width: 100%;
  height: 500px;
}
</style>

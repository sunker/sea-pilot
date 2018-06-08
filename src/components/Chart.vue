<template>
  <div class="chart-map" v-bind:style="{ height: height + 'px' }">
    <div class="loading-feedback" v-if="initialized === null">
      <p class="text-center temp">Laddar sjökort...</p>
    </div>
    <div class="loading-feedback" v-if="initialized === false">
      <p class="text-center temp">Kan inte ansluta till Eniro</p>
    </div>
    <div>
    <div class="chart-left-buttons">
        <v-btn @click="back()" outline dark large color="black">
          <v-icon dark>arrow_back</v-icon>
        </v-btn>
    </div>
    </div>
    <div v-if="displayZoom">
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
            <v-btn @click="zoomOut($event)" color="black" large dark outline>
              <v-icon>add</v-icon>
            </v-btn>
          </div>
          <div>
            <v-btn @click="zoomIn($event)" color="black" large dark outline>
              <v-icon>remove</v-icon>
            </v-btn>
          </div>
        </div>
      </v-flex>
    </div>
  </div>
</template>

<script>
import Chart from '../models/Chart'
import { mapState } from 'vuex'
import bus from '../Bus'

export default {
  mounted: function() {
    this.chart = new Chart(
      document.querySelector('.chart-map'),
      !this.currentCoordinate.defaultCoord ? this.currentCoordinate : null
    )
    this.initialized = true
    this.chart.onClick(e => this.chart.setAutoFocus(false))
    this.chart.onClick(e => bus.$emit('mapClicked'))
  },
  props: ['displayZoom', 'height'],
  computed: {
    ...mapState(['journey', 'coordinates', 'currentCoordinate']),
  },
  data() {
    return {
      initialized: false,
    }
  },
  methods: {
    longtapHandler() {
      console.log('tap')
    },
    back: function() {
      window.history.back()
    },
    panToCenter: function($event) {
      $event.stopPropagation()
      this.chart.panTo(this.currentCoordinate.lat, this.currentCoordinate.lng)
      this.chart.setAutoFocus(true)
    },
    zoomIn: function($event) {
      $event.stopPropagation()
      this.chart.zoomIn()
      // self.$store.commit('setCoordinates', currentCoord)
    },
    zoomOut: function($event) {
      $event.stopPropagation()
      this.chart.zoomOut()
    },
  },
  watch: {
    'currentCoordinate.lat': function(newVal) {
      this.chart.setPositionMarker(
        this.currentCoordinate.lat,
        this.currentCoordinate.lng
      )
    },
    'currentCoordinate.lng': function(newVal) {
      this.chart.setPositionMarker(
        this.currentCoordinate.lat,
        this.currentCoordinate.lng
      )
    },
    'journey.ongoing': function(newVal) {
      if (newVal) {
        this.chart.loadJourney(this.coordinates, this.journey.zoomLevel)
      } else {
        this.chart.stopJourney()
      }
    },
  },
}
</script>

<style scoped>
.chart-map {
  width: 100%;
  height: 500px;
}
</style>

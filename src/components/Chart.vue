<template>
  <div class="chart-map" v-bind:style="{ height: height + 'px' }">
    <div class="loading-feedback" v-if="initialized === null">
      <p class="text-center temp">Laddar sjökort...</p>
    </div>
    <div class="loading-feedback" v-if="initialized === false">
      <p class="text-center temp">Kan inte ansluta till Eniro</p>
    </div>
    <div class="button-group-top">
      <div class="left">
        <v-btn v-if="!splitView" @click="back()" outline dark color="black">
            <v-icon dark>arrow_back</v-icon>
          </v-btn>
      </div>
      <div>
        <v-btn v-if="!splitView" @click="toggleSplitView()" outline dark color="black">
          <v-icon v-if="journey.splitView" dark>crop_16_9</v-icon>
          <v-icon v-else dark>dehaze</v-icon>
        </v-btn>
      </div>
      <div class="right">
        <v-btn  @click="panToCenter($event)" outline fab dark :small="splitView && height < 820" :large="!splitView && height >= 820" color="black">
          <v-icon dark>my_location</v-icon>
        </v-btn>
      </div>
    </div>
      <v-flex v-if="!splitView" xs12 sm6 class="chart-zoom-buttons">
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
</template>

<script>
import Chart from '../models/Chart'
import { mapState, mapMutations } from 'vuex'
import bus from '../Bus'

export default {
  mounted: function() {
    const elem = document.querySelectorAll('.chart-map')[this.splitView ? 1 : 0]
    this.chart = new Chart(
      elem,
      !this.currentCoordinate.defaultCoord ? this.currentCoordinate : null,
      this.splitView ? 14 : this.journey.zoomLevel
    )
    this.initialized = true
    this.chart.onClick(e => this.chart.setAutoFocus(false))
    this.chart.onClick(e => bus.$emit('mapClicked'))
    if (this.journey.ongoing && !this.splitView) {
      this.chart.loadJourney(this.coordinates, this.journey.zoomLevel)
    } else {
      this.chart.setPositionMarker(
        this.currentCoordinate.lat,
        this.currentCoordinate.lng
      )
    }
  },
  props: ['displayZoom', 'height', 'splitView'],
  computed: {
    ...mapState(['journey', 'coordinates', 'currentCoordinate']),
  },
  data() {
    return {
      initialized: false,
    }
  },
  methods: {
    ...mapMutations(['toggleSplitView']),
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
      if (newVal && !this.splitView) {
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

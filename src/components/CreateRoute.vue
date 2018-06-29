<template>
      <div>
  <div class="chart-map create-route" v-bind:style="{ height: mapHeight + 'px' }">
    <div class="loading-feedback" v-if="initialized === null">
      <p class="text-center temp">Laddar sjökort...</p>
    </div>
    <div class="loading-feedback" v-if="initialized === false">
      <p class="text-center temp">Kan inte ansluta till Eniro</p>
    </div>
    <div class="button-group-top">
      <div class="left">
        <v-btn @click="back()" outline dark color="black">
          <v-icon dark>arrow_back</v-icon>
        </v-btn>
      </div>
      <div>
        <h2>{{name}}</h2>
      </div>
      <div class="right">
        <v-btn @click="panToCenter($event)" outline fab dark :small="mapHeight < 820" :large="mapHeight >= 820" color="black">
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
    <v-footer v-bind:style="{ height: footerHeight + 'px' }" style="border-top:1px solid gray;" height="" class="">
        <v-container v-if="!journey.splitView" grid-list-md text-xs-center>
          <v-layout row wrap justify-center class="table-journey" v-bind:class="{ largestats: this.footerHeight > 700, verylargestats: this.footerHeight > 1000 }">
            <v-flex xs6>
              <dl>
                <dt>KNOP</dt>
                <dd>{{Number(currentCoordinate.speed).toFixed(2)}}</dd>
              </dl>
            </v-flex>
            <v-flex xs6>
              <dl>
                <dt>KNOP (MEDEL)</dt>
                <dd>{{linePath.length}}</dd>
              </dl>
            </v-flex>
          </v-layout>
        </v-container>
      </v-footer>
  </div>
</template>

<script>
import Chart from '../models/ChartPlotter'
import { mapState } from 'vuex'
import bus from '../Bus'

export default {
  mounted: function() {
    const elem = document.querySelector('.chart-map.create-route')
    this.chart = new Chart(
      elem,
      !this.currentCoordinate.defaultCoord ? this.currentCoordinate : null,
      this.journey.zoomLevel
    )
    this.initialized = true
    this.chart.startNewJourney()
    this.chart.onClick(e => this.chart.setAutoFocus(false))
    this.chart.onClick(this.onClick)
    this.chart.onMoveEnd(e => (this.lastMove = new Date()))
    this.chart.onZoomChange(e => (this.lastMove = new Date()))
    this.chart.setPositionMarker(
      this.currentCoordinate.lat,
      this.currentCoordinate.lng
    )
    bus.$on('routeChanged', linePath => (this.linePath = linePath))
  },
  props: ['name'],
  computed: {
    ...mapState(['journey', 'coordinates', 'currentCoordinate']),
  },
  data() {
    return {
      initialized: false,
      mapHeight:
        (window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight) * 0.85,
      footerHeight:
        (window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight) * 0.15,
      displayZoom: false,
      lastMove: null,
      linePath: [],
    }
  },
  methods: {
    onClick(e) {
      if (
        !this.lastMove ||
        Math.abs(this.lastMove.getTime() - new Date().getTime()) > 500
      ) {
        this.chart.setWaypoint(e.latLng)
      }
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
    },
    zoomOut: function($event) {
      $event.stopPropagation()
      this.chart.zoomOut()
    },
    getDistance(lat1, lon1, lat2, lon2, unit = 'N') {
      var radlat1 = Math.PI * lat1 / 180
      var radlat2 = Math.PI * lat2 / 180
      var theta = lon1 - lon2
      var radtheta = Math.PI * theta / 180
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
      dist = Math.acos(dist)
      dist = dist * 180 / Math.PI
      dist = dist * 60 * 1.1515
      if (unit === 'K') {
        dist = dist * 1.609344
      }
      if (unit === 'N') {
        dist = dist * 0.8684
      }
      return dist
    },
  },
  // watch: {
  //   'currentCoordinate.lat': function(newVal) {
  //     this.chart.setPositionMarker(
  //       this.currentCoordinate.lat,
  //       this.currentCoordinate.lng
  //     )
  //   },
  //   'currentCoordinate.lng': function(newVal) {
  //     this.chart.setPositionMarker(
  //       this.currentCoordinate.lat,
  //       this.currentCoordinate.lng
  //     )
  //   },
  //   'journey.ongoing': function(newVal) {
  //     if (newVal && !this.splitView) {
  //       this.chart.loadJourney(this.coordinates, this.journey.zoomLevel)
  //     } else {
  //       this.chart.stopJourney()
  //     }
  //   },
  // },
}
</script>

<style scoped>
.create-route {
  z-index: 5000;
}

.chart-map {
  width: 100%;
  height: 500px;
}
</style>

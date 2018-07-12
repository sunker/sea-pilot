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
          <v-btn :disabled="linePath.length <= 1" @click="save()" outline fab dark :small="mapHeight < 820" :large="mapHeight >= 820" color="black">
            <v-icon dark>save</v-icon>
          </v-btn>
        </div>
      </div>
      <v-flex xs12 sm6 class="chart-zoom-buttons">
        <div class="text-xs-center">
          <div>
            <v-btn style="margin-bottom:18px" @click="panToCenter($event)" outline fab dark :small="mapHeight < 820" :large="mapHeight >= 820" color="black">
              <v-icon dark>my_location</v-icon>
            </v-btn>
          </div>
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
          <v-flex xs4>
            <dl>
              <dt>NM</dt>
              <dd>{{totalDistance}}</dd>
            </dl>
          </v-flex>
          <v-flex xs4>
            <dl>
              <dt>KNOP (MEDEL)</dt>
              <dd>
                <v-slider color="black" 

                v-model="knots" :max="9.5" :min="0.5" step="0.5" ticks :thumb-label="true"></v-slider>
              </dd>
            </dl>
          </v-flex>
          <v-flex xs4>
            <dl>
              <dt>TID</dt>
              <dd>{{totalTime}} h</dd>
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
    const routesItem = localStorage.getItem('routes')
    const routes = routesItem ? JSON.parse(routesItem) : {}
    this.chart.startNewJourney()
    if (routes.hasOwnProperty(this.id)) {
      this.chart.loadRoute(routes[this.id].linePath)
      this.linePath = routes[this.id].linePath
      this.knots = routes[this.id].knots
    }
    this.chart.onClick(e => this.chart.setAutoFocus(false))
    this.chart.onClick(this.onClick)
    this.chart.onMoveEnd(e => (this.lastMove = new Date()))
    this.chart.onZoomChange(e => (this.lastMove = new Date()))
    this.chart.setPositionMarker(
      this.currentCoordinate.lat,
      this.currentCoordinate.lng
    )
    bus.$on('routeChanged', linePath => {
      this.linePath = linePath
      this.save()
    })
  },
  props: ['name', 'id'],
  computed: {
    ...mapState(['journey', 'coordinates', 'currentCoordinate']),
    totalDistance() {
      if (this.linePath.length > 1) {
        return this.linePath
          .reduce((sum, curr, count) => {
            if (count === 0) {
              return sum
            } else {
              const prev = this.linePath[count - 1]
              return sum + this.getDistance(prev.x, prev.y, curr.x, curr.y)
            }
          }, 0)
          .toFixed(2)
      } else {
        return 0
      }
    },
    totalTime() {
      return (Number(this.totalDistance) / this.knots).toFixed(2)
    },
  },
  data() {
    return {
      knots: 5,
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
  watch: {
    knots: function() {
      this.save()
    }
  },
  methods: {
    save() {
      const routesItem = localStorage.getItem('routes')
      const routes = routesItem ? JSON.parse(routesItem) : {}
      routes[this.id] = {
        knots: this.knots,
        linePath: this.linePath,
        name: this.name,
        totalDistance: this.totalDistance,
        totalTime: this.totalTime,
        id: this.id,
      }
      localStorage.setItem('routes', JSON.stringify(routes))
    },
    onClick(e) {
      if (
        !this.lastMove ||
        Math.abs(this.lastMove.getTime() - new Date().getTime()) > 400
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

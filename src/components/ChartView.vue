<template>
  <v-layout column>
    <v-btn class="expand-info" fab dark small @click.stop="dialog = true" v-bind:style="{ top: mapHeight - 15 + 'px' }">
      <v-icon dark>add</v-icon>
    </v-btn>
    <chart :display-zoom="true" :height="mapHeight"></chart>
    <div class="below-wrapper" v-bind:class="{ split: journey.splitView }">
      <chart v-if="journey.splitView" class="split-map" :split-view="true" :display-zoom="true" :height="footerHeight" v-bind:style="{ 'flex-basis': (this.height > 1000 ? 82 : 75) + '%'}" v-bind:class="{ split: journey.splitView }"></chart>
      <v-footer v-bind:style="{ height: footerHeight + 'px' }" v-bind:class="{ split: journey.splitView }" style="border-top:1px solid gray;" height="" class="">
        <v-container v-if="!journey.splitView" grid-list-md text-xs-center>
          <v-layout row wrap justify-center class="table-journey" v-bind:class="{ largestats: this.footerHeight > 700, verylargestats: this.height > 1000 }">
            <v-flex xs4>
              <dl>
                <dt>KNOP</dt>
                <dd>{{Number(currentCoordinate.speed).toFixed(2)}}</dd>
              </dl>
            </v-flex>
            <v-flex xs4>
              <dl>
                <dt>KNOP (MEDEL)</dt>
                <dd>{{Number(averageGpsdSpeed).toFixed(2)}}</dd>
              </dl>
            </v-flex>
            <v-flex xs4>
              <dl>
                <dt>NM</dt>
                <dd>{{Number(currentCoordinate.totalDistance).toFixed(2)}}</dd>
              </dl>
            </v-flex>
    
    
            <v-flex xs4>
              <dl>
                <dt>KOMPASSRIKTNING</dt>
                <dd class="dd-small">{{compassDirection}}</dd>
              </dl>
            </v-flex>
            <v-flex xs4>
              <dl>
                <dt>LATITUD</dt>
                <dd class="dd-small">{{formatPosition(this.currentCoordinate.lat) + 'N'}}</dd>
              </dl>
            </v-flex>
            <v-flex xs4>
              <dl>
                <dt>LONGITUD</dt>
                <dd class="dd-small">{{formatPosition(this.currentCoordinate.lng) + 'E'}}</dd>
              </dl>
            </v-flex>
          </v-layout>
        </v-container>
        <v-container v-else grid-list-md text-xs-center>
          <v-layout row wrap justify-center class="table-journey mini" v-bind:class="{ largestats: this.footerHeight > 1040, verylargestats: this.height > 1200 }">
            <v-flex xs12>
              <dl>
                <dt>KNOP</dt>
                <!-- <dd>{{height}}</dd> -->
                <dd>{{Number(currentCoordinate.speed).toFixed(2)}}</dd>
              </dl>
            </v-flex>
            <v-flex xs12>
              <dl>
                <dt>KNOP (MEDEL)</dt>
                <dd>{{Number(averageGpsdSpeed).toFixed(2)}}</dd>
              </dl>
            </v-flex>
            <v-flex xs12>
              <dl>
                <dt>NM</dt>
                <dd>{{Number(currentCoordinate.totalDistance).toFixed(2)}}</dd>
              </dl>
            </v-flex>
          </v-layout>
        </v-container>
      </v-footer>
    </div>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false" class="extra-info-dialog" scrollable>
      <v-card tile>
        <v-toolbar card dark color="secondary">
          <v-btn icon @click.native="dialog = false" dark class="dialog-button-close">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="chart-button-row">
          <v-btn large :disabled="!journey.ongoing" slot="activator" @click="endJourney(currentCoordinate)">Visa markör</v-btn>
          <v-btn large :disabled="journey.ongoing" color="secondary" @click="createJourney(currentCoordinate)">Visa rutt</v-btn>
          <v-btn large :disabled="!journey.ongoing" slot="activator" @click="clearHistory(currentCoordinate)">Töm rutt</v-btn>
        </v-card-text>
        <chart-stats-board></chart-stats-board>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import Chart from './Chart'
import ChartStatsBoard from './ChartStatsBoard'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  created: function() {
    this.height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
  },
  computed: {
    ...mapState(['journey', 'currentCoordinate']),
    ...mapGetters(['bearing', 'compassDirection', 'speed', 'averageGpsdSpeed']),
    mapHeight() {
      return this.height * (this.journey.splitView ? 0.6 : 0.8)
    },
    footerHeight() {
      return this.height * (this.journey.splitView ? 0.4 : 0.2)
    },
  },
  data() {
    return {
      dialog: false,
      height: 0,
    }
  },
  methods: {
    ...mapMutations(['createJourney', 'endJourney', 'clearHistory']),
    formatPosition(pos) {
      const val = pos
        .toFixed(5)
        .toString()
        .replace('.', '°')
      return val.substr(0, 5) + '.' + val.substr(5)
    },
  },
  components: {
    Chart,
    ChartStatsBoard,
  },
}
</script>

<style scoped>
.expand-info {
  position: absolute;
  z-index: 10000;
  left: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 30px;
  width: 30px;
}

.extra-info-dialog {
  z-index: 10001;
}

.chart-button-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.dialog-button-close {
  margin-left: auto !important;
}

.below-wrapper.split {
  border-top: 2px solid gray;
  display: flex;
}
</style>

<style>
.split-map {
  flex-grow: 0;
  flex-shrink: 0;
  border-right: 2px solid gray;
}
</style>


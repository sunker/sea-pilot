<template>
  <v-layout column>
    <v-btn class="expand-info" fab dark small @click.stop="dialog = true" v-bind:style="{ top: mapHeight - 15 + 'px' }">
      <v-icon dark>add</v-icon>
    </v-btn>
    <chart :display-zoom="true" :height="mapHeight"></chart>
    <v-footer v-bind:style="{ height: footerHeight + 'px' }" style="border-top:1px solid gray" height="" class="">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap justify-center class="table-journey">
          <v-flex xs4>
            <dl>
              <dt>KNOP</dt>
              <dd>{{Number(currentCoordinate.speed).toFixed(2)}}</dd>
            </dl>
          </v-flex>
          <v-flex xs4>
            <dl>
              <dt>KNOP (MEDEL)</dt>
              <dd>{{averageGpsdSpeed}}</dd>
            </dl>
          </v-flex>
          <v-flex xs4>
            <dl>
              <dt>Bäring</dt>
              <dd>{{bearing.toFixed(0) + '°'}}</dd>
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
    </v-footer>
  
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false" class="extra-info-dialog" scrollable>
      <v-card tile>
        <v-toolbar card dark color="secondary">
          <v-btn icon @click.native="dialog = false" dark class="dialog-button-close">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="chart-button-row">
          <v-btn large :disabled="!journey.ongoing" slot="activator" @click="endJourney(currentCoordinate)">Avsluta tripp</v-btn>
          <v-btn large :disabled="journey.ongoing" color="secondary" @click="createJourney(currentCoordinate)">Starta tripp</v-btn>
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
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    this.mapHeight = height * 0.8
    this.footerHeight = height * 0.2
  },
  computed: {
    ...mapState(['journey']),
    ...mapGetters([
      'currentCoordinate',
      'bearing',
      'compassDirection',
      'speed',
      'averageGpsdSpeed',
    ]),
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    ...mapMutations(['createJourney', 'endJourney']),
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
</style>

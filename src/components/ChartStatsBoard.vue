<template>
  <v-layout row wrap justify-center class="table-journey">
    <v-flex xs4>
      <dl>
        <dt>KNOP(GPSD)</dt>
        <dd>{{currentCoordinate.speed}}</dd>
      </dl>
    </v-flex>
    <v-flex xs4>
      <dl>
        <dt>MEDELKNOP (GPSD)</dt>
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
        <dt>KNOP</dt>
        <dd>{{speed}}</dd>
      </dl>
    </v-flex>
    <v-flex xs4>
      <dl>
        <dt>MEDELKNOP</dt>
        <dd>{{averageSpeed}}</dd>
      </dl>
    </v-flex>
    <v-flex xs4>
      <dl>
        <dt>KMH (GPSD)</dt>
        <dd>{{(currentCoordinate.speed * 1.852).toFixed(2)}}</dd>
      </dl>
    </v-flex>
  
    <v-flex xs4>
      <dl>
        <dt>KOMPASSRIKTNING</dt>
        <dd>{{compassDirection}}</dd>
      </dl>
    </v-flex>
    <v-flex xs4>
      <dl>
        <dt>LATITUD</dt>
        <dd>{{formatPosition(this.currentCoordinate.lat) + 'N'}}</dd>
      </dl>
    </v-flex>
    <v-flex xs4>
      <dl>
        <dt>LONGITUD</dt>
        <dd>{{formatPosition(this.currentCoordinate.lng) + 'E'}}</dd>
      </dl>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['journey']),
    ...mapGetters([
      'currentCoordinate',
      'bearing',
      'compassDirection',
      'speed',
      'averageSpeed',
      'averageGpsdSpeed'
    ]),
  },
  methods: {
    formatPosition(pos) {
      const val = pos
        .toFixed(5)
        .toString()
        .replace('.', '°')
      return val.substr(0, 5) + '.' + val.substr(5)
    },
  }
}
</script>

<style scoped>
.table-journey {
  margin-top: 50px;
}
</style>

<template>
  <v-layout row wrap justify-center class="table-journey">
    <v-flex xs4>
      <dl>
        <dt>KNOP</dt>
        <dd>{{Number(currentCoordinate.speed).toFixed(2)}}</dd>
      </dl>
    </v-flex>
    <v-flex xs4>
      <dl>
        <dt>MEDELKNOP</dt>
        <dd>{{Number(averageGpsdSpeed).toFixed(2)}}</dd>
      </dl>
    </v-flex>
    <v-flex xs4>
      <dl>
        <dt>Bäring</dt>
        <dd>{{Number(currentCoordinate.track).toFixed(0) + '°'}}</dd>
      </dl>
    </v-flex>
  
    <v-flex xs4>
      <dl>
        <dt>NM</dt>
        <dd>{{Number(currentCoordinate.totalDistance ? currentCoordinate.totalDistance : 0).toFixed(2)}}</dd>
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
        <dt>KMH</dt>
        <dd>{{(currentCoordinate.speed * 1.852).toFixed(2)}}</dd>
      </dl>
    </v-flex>
  
    <v-flex xs6>
      <dl>
        <dt>LATITUD</dt>
        <dd>{{formatPosition(this.currentCoordinate.lat) + 'N'}}</dd>
      </dl>
    </v-flex>
    <v-flex xs6>
      <dl>
        <dt>LONGITUD</dt>
        <dd>{{formatPosition(this.currentCoordinate.lng) + 'E'}}</dd>
      </dl>
    </v-flex>
  </v-layout>
</template>

<script>
  import {
    mapGetters,
    mapState
  } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['journey', 'currentCoordinate']),
      ...mapGetters([
        'bearing',
        'compassDirection',
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

<template>
  <div>
    <div v-if="!errorMessage">
      <v-layout row wrap align-top >
        <v-flex xs4>
          <p style="margin-left:4px;">{{time}}</p>
        </v-flex>
        <v-flex xs8 style="text-align:right">
          <span  style="margin-right:4px;">{{weatherDescription}}</span>
        </v-flex>
      </v-layout>
      
      <v-layout row wrap align-center>
        <v-flex xs9>
          <img v-if="imageUrl" class="weather-image" :src="require('../../../static/img/weather/'+imageUrl+'.png')">
        </v-flex>
        <v-flex xs3>
          <p class="text-large">{{temperature}}</p>
        </v-flex>
      </v-layout>

      <v-flex xs12>
        <p>{{windSpeed}}</p>
      </v-flex>
    </div>
    <div v-if="errorMessage === false" class="text-center vertical-align-outer">
      <strong class="vertical-align-inner responsive-text">Kan inte ansluta till SMHI</strong>
    </div>
    <div v-if="errorMessage === null" class="text-center vertical-align-outer">
      <strong class="vertical-align-inner responsive-text">Hämtar väderdata...</strong>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCurrentWeather } from '../../services/weather'

export default {
  computed: {
    ...mapGetters(['currentCoordinate']),
  },
  mounted: async function() {
    const {
      swedishWeatherType,
      validTime,
      temperature,
      windVelocity,
      windGust,
      windDirection,
    } = await getCurrentWeather(this.currentCoordinate)
    this.errorMessage = undefined
    this.imageUrl = swedishWeatherType.value
    this.weatherDescription = this.convertWeatherTypeToText(
      swedishWeatherType.value
    )
    this.time = 'kl. ' + new Date(validTime).getHours()
    this.temperature = temperature.value + '°'
    this.windSpeed =
      windVelocity.value +
      ' (' +
      windGust.value +
      ') m/s ' +
      this.convertWindDirectionToText(windDirection.value)
  },
  data() {
    return {
      errorMessage: null,
      imageUrl: '',
      weatherDescription: '',
      time: '',
      temperature: '',
      windSpeed: '',
    }
  },
  methods: {
    convertWindDirectionToText: function(windDirection) {
      var val = Math.floor(windDirection / 22.5 + 0.5)
      var arr = [
        'nordlig',
        'nord nordöstlig',
        'nordöst',
        'öst nordöstlig',
        'östlig',
        'öst sydöstlig',
        'sydöstlig',
        'syd sydöstlig',
        'sydlig',
        'syd sydvästlig',
        'sydvästlig',
        'väst sydvästlig',
        'västlig',
        'väst nordvästlig',
        'nordvästlig',
        'nord nordvästlig',
      ]
      return arr[val % 16]
    },
    convertWeatherTypeToText: function(value) {
      switch (value) {
        case 1:
          return 'klart'
        case 2:
          return 'mestadels klart'
        case 3:
          return 'växlande molnighet'
        case 4:
          return 'halvklart'
        case 5:
          return 'molnigt'
        case 6:
          return 'mulet'
        case 7:
          return 'dimma'
        case 8:
          return 'regnskurar'
        case 9:
          return 'åskskurar'
        case 10:
          return 'byar av snöblandat regn'
        case 11:
          return 'snöbyar'
        case 12:
          return 'regn'
        case 13:
          return 'åska'
        case 14:
          return 'snöblandat regn'
        case 15:
          return 'snöfall'
        default:
          return ''
      }
    },
  },
}
</script>
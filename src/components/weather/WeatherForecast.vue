<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap align-center>
    <div v-if="!errorMessage" style="width:100%">
    <div class="chart-left-buttons">
        <v-btn @click="back()" outline dark small color="black">
          <v-icon dark>arrow_back</v-icon>
        </v-btn>
    </div>
    <br />
    <table class="table-responsive table-sm table-forecasts">
        <thead>
            <tr>
                <th class="col-md-1">Tid</th>
                <th class="col-md-2">Väder</th>
                <th class="col-md-2">Temp.</th>
                <th class="col-md-2">Nederbörd</th>
                <th class="col-md-2">Vind</th>
                <th class="col-md-1">Åska</th>
                <th class="col-md-1">Luftf.</th>
                <th class="col-md-1">Sikt</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(forecast, i) in forecasts">
                <td>{{forecast.time}}</td>
                <td>
                    <img :src="require('../../../static/img/weather/' + forecast.imageUrl + '.png')" width="64px" height="41px">
                </td>
                <td>{{forecast.temperature}}</td>
                <td>{{forecast.precipitation}}</td>
                <td>{{forecast.windSpeed}}</td>
                <td>{{forecast.thunderstormProbability}}</td>
                <td>{{forecast.humidity}}</td>
                <td>{{forecast.visibility}}</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="vertical-align-container">
    <div v-if="errorMessage === false" class="text-center vertical-align-outer">
        <strong class="vertical-align-inner text-large">Kan inte ansluta till SMHI</strong>
    </div>
    <div v-if="errorMessage === null" class="text-center vertical-align-outer">
        <strong class="vertical-align-inner text-large">Hämtar väderdata...</strong>
    </div>
</div>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { getForecasts } from '../../services/weather'

export default {
  computed: {
    ...mapState(['currentCoordinate']),
  },
  mounted: async function() {
    const forecasts = await getForecasts(this.currentCoordinate)
    this.forecasts = forecasts.map(this.formatForecast)
  },
  data() {
    return {
      forecasts: [],
      errorMessage: undefined,
    }
  },
  methods: {
    back: function() {
      window.history.back()
    },
    formatForecast: function(forecast) {
      return {
        imageUrl: forecast.swedishWeatherType.value,
        weatherDescription: this.convertWeatherTypeToText(
          forecast.swedishWeatherType.value
        ),
        time: 'kl. ' + new Date(forecast.validTime).getHours(),
        temperature: forecast.temperature.value + '°',
        windSpeed:
          forecast.windVelocity.value +
          ' (' +
          forecast.windGust.value +
          ') m/s ' +
          this.convertWindDirectionToText(forecast.windDirection.value),
        humidity: forecast.relativeHumidity.value + '%',
        precipitation: this.getPrecipitation(forecast),
        seanLevel: forecast.meanSeanLevel.value + 'hPA',
        visibility: forecast.visibility.value + ' km',
        thunderstormProbability:
          (forecast.thunderstormProbability.value
            ? forecast.thunderstormProbability.value
            : forecast.thunderstormProbability.values[0]) + '%',
      }
    },
    getPrecipitation: function (forecast) {
        var mean = (forecast.minimumPrecipitationIntensity.value ? forecast.minimumPrecipitationIntensity.value : forecast.minimumPrecipitationIntensity.values[0])
        var high = (forecast.maximumPrecipitationIntensity.value ? forecast.maximumPrecipitationIntensity.value : forecast.maximumPrecipitationIntensity.values[0])
        return mean + ' (' + high + ') mm'
    },
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

<style scoped>
.table-responsive {
  width: 100% !important;
}
</style>

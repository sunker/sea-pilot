<template>
  <v-app light>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'
import coordinates from '../testCoordinates.json'

export default {
  data() {
    return {
      cordova: Vue.cordova,
      counter: 1,
    }
  },
  mounted: function() {
    let self = this
    const journey = localStorage.getItem('journey')
    if (journey) {
      self.$store.commit('loadJourney', JSON.parse(journey))
    }
    setInterval(function() {
      if (self.counter === 472) self.counter = 0
      const coords = coordinates.gpx.wpt[self.counter]
      self.counter++
      const timestamp = new Date()
      timestamp.setSeconds(timestamp.getSeconds() + 15)
      const currentCoord = {
        lng: Number(coords.long),
        lat: Number(coords.lat),
        time: timestamp.getTime(),
        totalDistance: Math.floor(Math.random() * 100),
        speed: Math.floor(Math.random() * 10)
      }
      self.$store.commit('setCoordinates', currentCoord)
    }, 300)
  },
}
</script>

<style lang="scss">
body {
  font-family: 'helvetica';
}

.container {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}

.logo {
  // background: url('../../../images/logo.jpg') no-repeat;
  width: 330px;
  height: 49px;
  display: block;
  text-indent: -9999px;
  margin-left: auto;
  margin-right: auto;
}

.date-text {
}

.vcenter strong {
  vertical-align: middle;
  display: inline-block;
}

.vcenter {
  display: inline-block;
  vertical-align: middle;
  float: none;
}

.text-large {
  font-size: 1.5em;
}

.vertical-align-outer {
  line-height: 125px;
}

.vertical-align-inner {
  // display: inline-block;
  vertical-align: middle;
}

.widget-row {
  .widget-wrapper {
    height: 125px;
  }
  border-bottom: 1px solid #eee;
  &.first {
    border-top: 1px solid #eee;
  }
  .widget {
    padding: 10px;
    // height: 180px;
    &.first {
      border-right: 1px solid #eee;
    }
  }
  .widget:nth-child(2) {
    // border-left: 1px solid #eee;
    height: 100%;
  }
}

.chart-map {
  position: relative;
  z-index: 9998;
  .btn:focus {
    outline: none;
  }
  .chart-buttons {
    position: absolute;
    right: 5px;
    bottom: 15px;
    button {
      background: none;
    }
  }
  .chart-zoom-buttons {
    position: absolute;
    right: 5px;
    bottom: 5px;
    button {
      background: none;
    }
  }
  .chart-center-buttons {
    position: absolute;
    right: 5px;
    top: 5px;
    button {
      background: none;
    }
  }
  .chart-left-buttons {
    position: absolute;
    left: 5px;
    top: 15px;
    button {
      background: none;
    }
  }
  .e-map {
    z-index: -1 !important;
  }
  .e-logo,
  .e-maptypes {
    display: none;
  }
}

.table-journey {
  border-style: none;
  margin-bottom: 0;
  table-layout: fixed;
  td {
    border-style: none !important;
    max-width: 33%;
  }
  dt {
    font-weight: inherit;
    font-size: 10px;
    text-align: center;
    text-transform: uppercase;
  }
  dd {
    font-weight: bold;
    font-size: 22px;
    text-align: center;
    &.dd-small {
      font-size: 14px;
      margin-top: 3px;
    }
  }
  dl {
    &.dl-tight {
      margin-bottom: 15px;
    }
  }
}

.table-forecasts {
  border-style: none;
  th {
    font-size: 10px;
    padding-left: 0;
    text-align: left;
    text-transform: uppercase;
  }
  td {
    font-size: 10px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
}

.man-overboard-wrapper {
  margin-bottom: 10px;
}

.jumbotron {
  margin-bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  p {
    margin-bottom: 0;
  }
}

.btn-xlarge {
  padding: 16px 26px;
  font-size: 22px; //change this to your desired size
  line-height: normal;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
}

.btn-xlarge-round {
  padding: 18px 22px;
  font-size: 26px; //change this to your desired size
  line-height: normal;
  -webkit-border-radius: 36px;
  -moz-border-radius: 36px;
  border-radius: 36px;
}

.dashboard-link,
.dashboard-link:hover {
  color: inherit;
}

@media only screen and (max-device-width: 500px) {
  .responsive-text {
    font-size: 0.8em !important;
  }
  .chart-zoom-buttons {
    display: none !important;
  }
}
</style>


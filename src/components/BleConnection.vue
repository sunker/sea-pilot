<template>
  <v-system-bar status color="primary" lights-out>
    <v-spacer></v-spacer>
    <v-icon v-if="status === 'disconnected'">bluetooth_disabled</v-icon>
    <!-- <v-icon v-if="status === 'connecting'">bluetooth_searching</v-icon> -->
    <v-icon v-if="status === 'connecting'">bluetooth_disabled</v-icon>
    <v-icon v-if="status === 'connected'">bluetooth_connected</v-icon>
    <span>{{message}}</span>
  </v-system-bar>
</template>

<script>
  import Vue from 'vue'
  import {
    TextDecoder
  } from 'text-encoding'
  
  export default {
    data() {
      return {
        cordova: Vue.cordova,
        status: 'disconnected',
        message: ''
      }
    },
    created() {
      var self = this
      this.cordova.on('deviceready', () => {
        self.scan()
      })
    },
    methods: {
      scan: function() {
        console.log('Scanning')
        this.status = 'connecting'
        ble.scan(
          ['00010000-9FAB-43C8-9231-40F6E305F96D'],
          20,
          this.scanSucceeded,
          this.scanFailed
        )
      },
      formatCoord: function(bleString) {
        const [longitude, latitude, timestamp, speed, totalDistance] = bleString.split(';')
        return {
          lng: Number(longitude),
          lat: Number(latitude),
          time: Number(timestamp),
          speed: Number(speed).toFixed(2),
          totalDistance: Number(totalDistance).toFixed(2),
        }
      },
      onPulseGps: function(data) {
        this.status = 'connected'
        const string = new TextDecoder('utf-8').decode(data)
        const currentCoord = this.formatCoord(string)
        this.$store.commit('setCoordinates', currentCoord)
      },
      onRouteGps: function(data) {
        // const string = new TextDecoder('utf-8').decode(data)
        // const coordinates = string.split('|').map(this.formatCoord)
        // this.$store.commit('setCoordinates', coordinates)
      },
      scanSucceeded: function(peripheral) {
        this.status = 'connected'
        const self = this
        console.log('ScanSucceeded ' + JSON.stringify(peripheral))
        ble.connect(
          peripheral.id,
          peripheral => {
            console.log('Connected to ' + peripheral.id)
            ble.startNotification(
              peripheral.id,
              peripheral.services[0],
              '00010001-9FAB-43C8-9231-40F6E305F96E',
              self.onPulseGps,
              function(err) {
                self.status = 'disconnected'
                console.log('Connect failed', err)
                self.scan()
              }
            )
          },
          function(err) {
            self.status = 'disconnected'
            console.log('Connect failed', err)
            self.scan()
          }
        )
  
        // ble.connect(
        //   peripheral.id,
        //   peripheral => {
        //     console.log('Connected to ' + peripheral.id)
        //     ble.startNotification(
        //       peripheral.id,
        //       peripheral.services[0],
        //       '00010001-9FAB-43C8-9231-40F6E305F96F',
        //       self.onRouteGps,
        //       function(err) {
        //         self.status = 'disconnected'
        //         console.log('Connect failed', err)
        //         // self.scan()
        //       }
        //     )
        //   },
        //   function(err) {
        //     self.status = 'disconnected'
        //     console.log('Connect failed', err)
        //     // self.scan()
        //   }
        // )
      },
      connectFailed: function(err) {
        this.status = 'disconnected'
        console.log('Connect failed', err)
        this.scan()
      },
      scanFailed: function(err) {
        this.status = 'disconnected'
        console.log('Scan failed', err)
        this.scan()
      },
    },
  }
</script>
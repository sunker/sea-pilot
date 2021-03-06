import Vuex from 'vuex'
import getters from './getters.js'

export default new Vuex.Store({
  state: {
    journey: {
      ongoing: false,
      zoomLevel: 10,
      splitView: false
    },
    currentCoordinate: {
      lat: 59.334591,
      lng: 18.06324,
      time: '',
      speed: 0,
      totalDistance: 0,
      isMob: false,
      defaultCoord: true
    },
    coordinates: []
  },
  getters,
  mutations: {
    setCoordinates (state, { lat, lng, time, speed, totalDistance }) {
      state.coordinates.push({ lat, lng, time, speed: speed || 0, totalDistance })
      state.currentCoordinate = { lat, lng, time, speed: speed || 0, totalDistance }
      // if (state.journeyMode) {
      let storedCoordinates = JSON.parse(localStorage.getItem('journey')) || []
      storedCoordinates.push({ lat, lng, time, speed, totalDistance })
      localStorage.setItem('journey', JSON.stringify(storedCoordinates))
      // } else {
      //   if (state.coordinates.length >= 10000) state.coordinates.pop()
      // }
    },
    loadJourney (state, coordinates) {
      state.coordinates = coordinates
      state.journey.ongoing = true
    },
    createJourney (state, startCoord) {
      // localStorage.setItem('journey', JSON.stringify([startCoord]))
      // state.coordinates = [startCoord]
      state.journey.ongoing = true
    },
    endJourney (state, coord) {
      // localStorage.removeItem('journey')
      // state.coordinates = [coord]
      state.journey.ongoing = false
    },
    clearHistory (state, coord) {
      localStorage.setItem('journey', JSON.stringify([]))
      localStorage.removeItem('journey')
      state.coordinates = [coord]
      state.journey.ongoing = false
    },
    toggleSplitView(state) {
      state.journey.splitView = !state.journey.splitView
    }
  }
})


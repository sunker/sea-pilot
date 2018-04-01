import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    coordinates: {
      lat: 59.334591,
      lng: 18.06324,
      timestamp: ''
    }
  },
  mutations: {
    setCoordinates (state, { lat, lng }) {
      state.coordinates.lat = lat
      state.coordinates.lng = lng
    }
  }
})

import { getBearing, getSpeed } from 'geolib'

export default {
  currentCoordinate: state => state.coordinates[0],
  bearing: state => {
    if (state.coordinates.length < 2) return 0.00
    return getBearing({
      latitude: state.coordinates[1].lat,
      longitude: state.coordinates[1].lng
    }, {
        latitude: state.coordinates[0].lat,
        longitude: state.coordinates[0].lng
      })
  },
  compassDirection: (state, getters) => {
    const bearing = getters.bearing
    const val = Math.floor((bearing / 22.5) + 0.5)
    const arr = ['N', 'NNÖ', 'NÖ', 'ÖNÖ', 'Ö', 'ÖSÖ', 'SÖ', 'SSÖ', 'S', 'SSV', 'SV', 'VSV', 'V', 'VNV', 'NV', 'NNV']
    return arr[(val % 16)]
  },
  averageGpsdSpeed: (state, getters) => {
    return state.coordinates.map(x => Number(x.speed || 0)).reduce((total, obj) => {
      total = total + obj
      return total
    }, 0) / state.coordinates.length
  },
  averageSpeed: (state, getters) => {
    if (state.coordinates.length === 1) return 0.00

    let totalSpeed = 0
    let currentCoordinate = getters.currentCoordinate
    for (var i = 1; i < state.coordinates.length; i++) {
      var speed = getSpeed(state.coordinates[i], currentCoordinate)
      totalSpeed = totalSpeed + speed
      currentCoordinate = state.coordinates[i]
    }
    return (totalSpeed / state.coordinates.length).toFixed(2)
  }
}

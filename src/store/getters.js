import { getBearing, getSpeed } from 'geolib'

export default {
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
    if (state.coordinates.length === 0) return 0.00
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
  },
  splitView (state) {
    return state.journey.splitView
  },
  totalDistance (state) {
    if (!state.coordinates || state.coordinates.length === 1) return 0.00

    let totalDistance = 0
    let currentCoordinate = state.coordinates[0]
    for (var i = 1; i < state.coordinates.length; i++) {
      const distance = getDistance(state.coordinates[i].lat, state.coordinates[i].lng, currentCoordinate.lat, currentCoordinate.lng)
      totalDistance = totalDistance + distance
      currentCoordinate = state.coordinates[i]
    }
    return totalDistance
  }
}

function getDistance (lat1, lon1, lat2, lon2, unit = 'N') {
  var radlat1 = Math.PI * lat1 / 180
  var radlat2 = Math.PI * lat2 / 180
  var theta = lon1 - lon2
  var radtheta = Math.PI * theta / 180
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  if (unit === 'K') {
    dist = dist * 1.609344
  }
  if (unit === 'N') {
    dist = dist * 0.8684
  }
  return dist
}

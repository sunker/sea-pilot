export default class Chart {
  constructor(parentDiv, coord, zoomLevel = 10) {
    try {
      if (this.map) {
        eniro.maps.event.clearListeners(this.map, 'click')
        eniro.maps.event.clearListeners(this.map, 'zoom_changed')
      }

      this.map = new eniro.maps.Map(parentDiv, {
        zoom: zoomLevel,
        mapTypeId: eniro.maps.MapTypeId.NAUTICAL,
        mapTypeControl: false,
        zoomControl: false,
        focus: true
      })

      this.autoFocus = true
      this.redMarkers = []

      // coord = coord || { lat: 59.334591, lng: 18.06324 }
      if (coord) this.map.panTo(new eniro.maps.LatLng(coord.lat, coord.lng))
      this.marker = new eniro.maps.Marker({
        map: this.map,
        position: new eniro.maps.LatLng(0, 0) // WAT?
      })
      return true
    } catch (ex) {
      return false
    }
  }

  setPositionMarker (lat, lng) {
    if (this.journeyMode) {
      this.linePath.push(new eniro.maps.LatLng(lat, lng))
    } else {
      this.marker.setPosition(new eniro.maps.LatLng(lat, lng))
    }
    this.marker.setPosition(new eniro.maps.LatLng(lat, lng))

    if (this.autoFocus) {
      this.map.panTo(new eniro.maps.LatLng(lat, lng))
    }
  }

  panTo (lat, lng) {
    this.map.panTo(new eniro.maps.LatLng(lat, lng))
  }

  zoomIn () {
    var zoomLevel = this.map.getZoom()
    this.map.setZoom(--zoomLevel)
  }

  zoomOut () {
    var zoomLevel = this.map.getZoom()
    this.map.setZoom(++zoomLevel)
  }

  stopJourney () {
    this.journeyMode = false
    if (this.marker) {
      this.marker.setMap(this.map)
    };

    if (this.line) this.line.setMap(null)
    if (this.linePath) this.linePath = []

    this.redMarkers.forEach(function (redMarker) {
      redMarker.setVisible(false)
    })
    this.redMarkers = []
  }

  startNewJourney () {
    this.journeyMode = true
    this.linePath = new eniro.maps.MapArray()
    this.line = new eniro.maps.Polyline({
      map: this.map,
      path: this.linePath
    })
  }

  loadJourney (coordinates, zoomLevel) {
    this.journeyMode = true
    this.map.setZoom(zoomLevel)
    this.linePath = new eniro.maps.MapArray()
    for (var i = 0; i < coordinates.length; i++) {
      const { lat, lng, isMob } = coordinates[i]
      if (isMob) {
        this.addRedMarker({ lat, lng })
      }
      this.linePath.push(new eniro.maps.LatLng(lat, lng))
    }
    this.line = new eniro.maps.Polyline({
      map: this.map,
      path: this.linePath
    })
  }

  setAutoFocus (focus) {
    this.autoFocus = focus
  }

  addRedMarker (coordinate) {
    this.redMarker = new eniro.maps.Marker({
      map: this.map,
      touch: true,
      position: new eniro.maps.LatLng(0, 0), // WAT?
      icon: new eniro.maps.MarkerImage('../../images/MOB.png', new eniro.maps.Size(24, 24), new eniro.maps.Point(0, 0), new eniro.maps.Point(11, 13), 0, 0)
    })
    this.redMarker.setPosition(new eniro.maps.LatLng(coordinate.lat, coordinate.lng))
    this.redMarkers.push(this.redMarker)
  }

  onClick (callback) {
    eniro.maps.event.addListener(this.map, 'click', callback)
  }

  onMoveEnd (callback) {
    eniro.maps.event.addListener(this.map, 'moveend', callback)
  }

  onZoomChange (callback) {
    eniro.maps.event.addListener(this.map, 'zoom_changed', function () {
      callback({
        zoomLevel: this.map.getZoom()
      })
    })
  }
}

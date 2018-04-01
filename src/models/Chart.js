let map,
  marker,
  line,
  linePath,
  redMarkers = [],
  journeyMode = false,
  autoFocus = true

export default class Chart {
  constructor(parentDiv) {
    try {
      if (map) {
        eniro.maps.event.clearListeners(map, 'click')
        eniro.maps.event.clearListeners(map, 'zoom_changed')
      }

      map = new eniro.maps.Map(parentDiv, {
        zoom: 10,
        mapTypeId: eniro.maps.MapTypeId.NAUTICAL,
        mapTypeControl: false,
        zoomControl: false,
        focus: true
      })

      // $rootScope.$broadcast('mapInitialized');s

      // var coord = geoService.getCurrentCoordinate()
      let coord = { lat: 59.334591, lng: 18.06324 }
      map.panTo(new eniro.maps.LatLng(coord.lat, coord.lng))

      if (journeyMode) {
        line = new eniro.maps.Polyline({
          map: map,
          path: linePath
        })
      } else {
        marker = new eniro.maps.Marker({
          map: map,
          position: new eniro.maps.LatLng(0, 0) // WAT?
        })
      }
      return true
    } catch (ex) {
      return false
    }
  };

  setPositionMarker (lat, lng) {
    if (journeyMode) {
      linePath.push(new eniro.maps.LatLng(lat, lng))
    } else {
      marker.setPosition(new eniro.maps.LatLng(lat, lng))
    }

    if (autoFocus) {
      map.panTo(new eniro.maps.LatLng(lat, lng))
    }
  };

  panTo (lat, lng) {
    map.panTo(new eniro.maps.LatLng(lat, lng))
  };

  zoomIn () {
    var zoomLevel = map.getZoom()
    map.setZoom(--zoomLevel)
  };

  zoomOut () {
    var zoomLevel = map.getZoom()
    map.setZoom(++zoomLevel)
  };

  stopJourney () {
    journeyMode = false
    if (marker) {
      marker.setVisible(true)
      marker.setMap(map)
    };

    if (line) line.setMap(null)
    if (linePath) linePath = []

    redMarkers.forEach(function (redMarker) {
      redMarker.setVisible(false)
    })
    redMarkers = []
  };

  loadJourney (data) {
    journeyMode = true
    marker.setVisible(false)
    map.setZoom(data.zoom_level)
    linePath = new eniro.maps.MapArray()
    for (var i = 0; i < data.coordinates.length; i++) {
      var coordinate = data.coordinates[i]
      if (coordinate.is_MOB) {
        this.addRedMarker({
          lat: coordinate.latitude,
          lng: coordinate.longitude
        })
      }
      linePath.push(new eniro.maps.LatLng(coordinate.latitude, coordinate.longitude))
    }
    line = new eniro.maps.Polyline({
      map: map,
      path: linePath
    })
  };

  setAutoFocus (focus) {
    autoFocus = focus
    console.log('Autofocus: ' + focus)
  };

  addRedMarker (coordinate) {
    var redMarker = new eniro.maps.Marker({
      map: map,
      position: new eniro.maps.LatLng(0, 0), // WAT?
      icon: new eniro.maps.MarkerImage('../../images/MOB.png', new eniro.maps.Size(24, 24), new eniro.maps.Point(0, 0), new eniro.maps.Point(11, 13), 0, 0)
    })
    redMarker.setPosition(new eniro.maps.LatLng(coordinate.lat, coordinate.lng))
    redMarkers.push(redMarker)
  };

  onClick (callback) {
    eniro.maps.event.addListener(map, 'click', callback)
  };

  onZoomChange (callback) {
    eniro.maps.event.addListener(map, 'zoom_changed', function () {
      callback({
        zoomLevel: map.getZoom()
      })
    })
  };
}

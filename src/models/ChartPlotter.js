import bus from '../Bus'

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
      this.markers = []

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
  }

  startNewJourney () {
    this.journeyMode = true
    this.linePath = new eniro.maps.MapArray()
    this.line = new eniro.maps.Polyline({
      map: this.map,
      path: this.linePath,
      strokeColor: '#505050',
      strokeWeight: 3
    })
  }

  setWaypoint (eniroLatLng) {
    this.linePath.push(eniroLatLng)
    const marker = new eniro.maps.Marker({
      map: this.map,
      position: eniroLatLng,
      draggable: true,
      zIndex: this.linePath.array.length - 1 + 100,
      icon: new eniro.maps.MarkerImage('data:image/png;base64,iVB ORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAADw0lEQVR4Ae3aA7AkVxgF4DN4Vsy1d3t3pvs/pdi2k1KsUl4pVjG2nUJs27ZtrG3vXXt2pnH/7p6q/k4Z750zbiBjUyaTyWScRu4ml8qd8ox8xD9lDmfyT/lAnpE7ebHszgakWMHdX57kTJoqmSmP8wAUkDZ9mnkW/6Pxmf+ke0ATUqPoncHRNAEz2jsDRSRPDuLvNCHzuxyERBV4DU3EXIM8kuG0y2s00SOvDe5A/Mrbyg80lvJ9qQfixV4yksZeZCR7IT5DNuUfNJbz85BNEQ828BMahXzCBsSB99Mo5X7o846l0Yt3HHQNaJKRmgNkpPJPDJ5Hoxs5H3rYxak0ypnCLmiRKyNVe6/syL7yf83n4AroYINMj1D/rR4tWMLrXXPCNDZAgxwWpf6qN+eSCfyHpmoOhQZ5OPwA95C1f0dV/yaXR6AgxynhB8gcd1esgUOqv5GRg23uDmF/abo7yNh1Jzib1HjGdoBt3jmh6n81YmOg1FdGrjWhyOdpquZc2Cb3hKk/oHPlz2/+u3ICG2rWN7wbtsm7oeqv4m3DP5dOkH34qo/3zLuwjX8Gqy+frqy/UmkL/8dw8hds48Rg9Z12rGdEP1lI4ysTYZssilqfXfzW919YCNs4y/c//2AD9b+k8Z1ZsI3/+q3foyVyfcN/YZvPAm9Vqu+0B6xv+CVs46v+frJVrP8xTcC8CtvklhjrG7kFtskJtR6zSvXZGqY+jZwA28oOTdU0VKz/Hk2YlB1Yl6/+QWqzPmchD/vkxSAD+jSHrm/kJWjgKT4GrKovb9CEzilKp3Sr/ZywV18WOZtAB9/0M8BpDFd/Vd6EFu8MmhhyJrSU2mSOdn2Zw1bokfvUB9wHTe722gPc7aGLv2jWl9+gTU5QHXAC1BXlb7UB/6AIfd5JWgO8k6BE/znQf/z13wdyImKT50/2L3Qjj/h4R9ge4B2BeMnXVgd8i7h5e9oc4O6F+PExawMeQxKcrWS6jfoyffiWSAbP1P/9rysnH0StLx8ih+SUBnNBpAELSoORLLkiygC5Aknr0cJ/Qw/4r0cLkuceYuH6fbL4YKgBDyItBnRyVOD6owZ0Ij3cXYMO8HZBush1QerL9UgbNsjnvgd8wQakT3lbTvB3EdvbBunk7lr7Srws9HZGesklNQdcglTL17io9wnySLfhPWXShurL5FIPpB/3rvxOkIXcG/VBuisO6IYe/RvU5B7UlYJ8tFb9j1BAfSltIWNX1R9b2gL1h8J5ywbMo6A+yak0NHIq6hcv5+XIZDKZTEbNYgdyS0g+abatAAAAAElFTkSuQmCC',
        new eniro.maps.Size(40, 40))
    })
    const self = this

    eniro.maps.event.addListener(marker, 'drag', function (e) {
      self.linePath.setAt(this.zIndex - 100, e.latLng)
      eniro.maps.event.trigger(self.map, 'moveend')
      const copy = Object.assign([], self.linePath.array)
      copy[this.zIndex - 100] = e.latLng
      bus.$emit('routeChanged', copy)
    })

    eniro.maps.event.addListener(this.map, 'zoom_changed', function () {
      marker.setVisible(self.map.getZoom() > 10)
    })
    this.markers.push(marker)
    bus.$emit('routeChanged', this.linePath.array)
  }

  loadRoute (linePath) {
    linePath.forEach(l => this.setWaypoint(new eniro.maps.LatLng(l.y, l.x)))
  }

  setAutoFocus (focus) {
    this.autoFocus = focus
  }

  onClick (callback) {
    eniro.maps.event.addListener(this.map, 'click', callback)
  }

  onMoveEnd (callback) {
    eniro.maps.event.addListener(this.map, 'moveend', callback)
    // eniro.maps.event.addListener(this.map, 'touchend', () => console.log('touchend'))
  }

  onZoomChange (callback) {
    const self = this
    eniro.maps.event.addListener(this.map, 'zoom_changed', function () {
      callback({
        zoomLevel: self.map.getZoom()
      })
    })
  }
}

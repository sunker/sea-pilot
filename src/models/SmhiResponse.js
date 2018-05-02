const Response = function (error, body) {
  if (error) {
    this.error = error
  } else {
    try {
      this.body = body
      this.forecasts = createForecasts(body)
    } catch (exception) {
      this.error = 'Unexpected error when parsing response from SMHI'
    }
  }
}

Response.prototype.getLatitude = function () {
  return this.body.lat
}

Response.prototype.getLongitude = function () {
  return this.body.lon
}

Response.prototype.getReferencetime = function () {
  return new Date(this.body.referenceTime)
}

Response.prototype.getJSON = function () {
  return this.body
}

Response.prototype.getForecasts = function () {
  return this.forecasts
}

var createForecasts = function (body) {
  var baseData = {
    lat: body.lat,
    lon: body.lon,
    referenceTime: body.referenceTime
  }
  return body.timeSeries.map(function (timeSeriesElement) {
    return new Forecast(baseData, timeSeriesElement)
  })
}

var Forecast = function (baseData, timeSeriesElement) {
  for (var baseDataKey in baseData) {
    if (baseData.hasOwnProperty(baseDataKey)) {
      this[baseDataKey] = baseData[baseDataKey]
    }
  }
  for (var elementKey in timeSeriesElement) {
    if (timeSeriesElement.hasOwnProperty(elementKey)) {
      this[elementKey] = timeSeriesElement[elementKey]
    }
  }
}

Forecast.prototype.getLatitude = function () {
  return this.lat
}

Forecast.prototype.getLongitude = function () {
  return this.lon
}

Forecast.prototype.getReferencetime = function () {
  return new Date(this.referenceTime)
}

Forecast.prototype.getValidTime = function () {
  return new Date(this.validTime)
}

Forecast.prototype.getMeanSeaLevel = function () {
  var forecastProp = this.parameters[0]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getTemperature = function () {
  var forecastProp = this.parameters[1]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getVisibility = function () {
  var forecastProp = this.parameters[2]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getWindDirection = function () {
  var forecastProp = this.parameters[3]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getWindVelocity = function () {
  var forecastProp = this.parameters[4]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getRelativeHumidity = function () {
  var forecastProp = this.parameters[5]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getThunderstormProbability = function () {
  var forecastProp = this.parameters[6]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getTotalCloudCover = function () {
  var forecastProp = this.parameters[7]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getLowCloudCover = function () {
  var forecastProp = this.parameters[8]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getMediumCloudCover = function () {
  var forecastProp = this.parameters[9]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getHighCloudCover = function () {
  var forecastProp = this.parameters[10]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getGust = function () {
  var forecastProp = this.parameters[11]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getMinimumPrecipitationIntensity = function () {
  var forecastProp = this.parameters[12]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getMaximumPrecipitationIntensity = function () {
  var forecastProp = this.parameters[13]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getPercentPrecipitationFrozenForm = function () {
  var forecastProp = this.parameters[14]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getPrecipitationCategory = function () {
  var forecastProp = this.parameters[15]
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

Forecast.prototype.getWeatherSymbol = function () {
  var forecastProp = this.parameters[18]
  if (!forecastProp) {
    forecastProp = {}
  }
  forecastProp.value = forecastProp.values && forecastProp.values[0] ? forecastProp.values[0] : undefined
  return forecastProp
}

module.exports = Response

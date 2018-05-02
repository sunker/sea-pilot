import { get } from 'axios'
import SmhiResponse from '../models/SmhiResponse'

export const getForecasts = async coordinate => {
  if (!coordinate) {
    coordinate = {
      lat: 59,
      lng: 18
    }
  }
  const { data } = await get(`http://opendata-download-metfcst.smhi.se:80/api/category/pmp2g/version/2/geotype/point/lon/${coordinate.lng.toFixed(6)}/lat/${coordinate.lat.toFixed(6)}/data.json`)
  const response = new SmhiResponse(null, data)
  return response.getForecasts().map(buildJson).filter(f => {
    if (new Date(f.validTime).getDate() > new Date().getDate()) return true
    return new Date().getHours() <= new Date(f.validTime).getHours()
  })
}

export const getCurrentWeather = async (coordinate) => {
  const forecasts = await getForecasts(coordinate)
  return forecasts.find(f => new Date().getHours() === new Date(f.validTime).getHours()) || forecasts[0]
}

let buildJson = (forecast) => {
  return {
    temperature: forecast.getTemperature(),
    meanSeanLevel: forecast.getMeanSeaLevel(),
    validTime: forecast.getValidTime(),
    lastUpdated: forecast.getReferencetime(),
    visibility: forecast.getVisibility(),
    windDirection: forecast.getWindDirection(),
    windVelocity: forecast.getWindVelocity(),
    windGust: forecast.getGust(),
    relativeHumidity: forecast.getRelativeHumidity(),
    thunderstormProbability: forecast.getThunderstormProbability(),
    maximumPrecipitationIntensity: forecast.getMaximumPrecipitationIntensity(),
    minimumPrecipitationIntensity: forecast.getMinimumPrecipitationIntensity(),
    precipitationType: getSwedishPrecipitationType(forecast.getPrecipitationCategory()),
    swedishWeatherType: forecast.getWeatherSymbol()
  }
}

let getSwedishPrecipitationType = (precipitationCategory) => {
  switch (precipitationCategory.values[0]) {
    case 1:
      return 'snö'
    case 2:
      return 'snöblandat regn'
    case 3:
      return 'regn'
    case 4:
      return 'duggregn'
    case 5:
      return 'underkylt regn'
    case 6:
      return 'underkylt duggregn'
    default:
      return null
  }
}

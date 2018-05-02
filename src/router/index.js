import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ChartView from '@/components/ChartView'
import WeatherForecast from '@/components/Weather/WeatherForecast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView
    },
    {
      path: '/weather',
      name: 'weather',
      component: WeatherForecast
    }
  ]
})

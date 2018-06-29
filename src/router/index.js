import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ChartView from '@/components/ChartView'
import Routes from '@/components/Routes'
import CreateRoute from '@/components/CreateRoute'
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
    },
    {
      path: '/rutter',
      name: 'routes',
      component: Routes
    },
    {
      path: '/skapa-rutt/:name',
      name: 'CreateRoute',
      component: CreateRoute,
      props: true
    }
  ]
})

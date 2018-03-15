import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Shop from '@/components/pages/Shop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop/:id',
      component: Shop
    }
  ]
})

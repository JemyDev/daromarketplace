import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Shops from '@/components/pages/Shops'
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
      path: '/shops/',
      name: 'shops',
      component: Shops
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: Shop
    }
  ]
})

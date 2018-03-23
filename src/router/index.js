import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Shops from '@/components/pages/Shops'
import Shop from '@/components/pages/Shop'
import NotFound from '@/components/pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/',
      name: 'home',
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
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
  ]
})

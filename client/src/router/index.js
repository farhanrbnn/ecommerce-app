import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import login from '@/components/login'
import shop from '@/components/shop'
import inputGoods from '@/components/inputGoods'
import details from '@/components/details'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/input',
      name: 'inputGoods',
      component: inputGoods
    },
    {
      path: '/shop/:userId',
      name: 'details',
      component: details
    }
  ]
})

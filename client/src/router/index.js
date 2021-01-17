import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import login from '@/components/login'
import shop from '@/components/shop'
import inputGoods from '@/components/inputGoods'
import details from '@/components/details'
import register from '@/components/register'
import shopCart from '@/components/shopCart'
import checkout from '@/components/checkout'

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
      component: details,
      props: true
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/cart',
      name: 'cart',
      component: shopCart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    }
  ]
})

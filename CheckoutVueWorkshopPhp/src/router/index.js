import Vue from 'vue'
import Router from 'vue-router'
import Checkout from '@/components/Checkout'
import CheckoutSilentOrder from '@/components/CheckoutSilent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Checkout',
    component: Checkout
  },{
    path: '/Silent',
    name: 'CheckoutSilent',
    component: CheckoutSilentOrder
  }]
})

import Vue from 'vue'
import Router from 'vue-router'
import Checkout from '@/components/Checkout'
import CheckoutSplit from '@/components/CheckoutSplit'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Checkout',
    component: Checkout
  },{
    path: '/Split',
    name: 'CheckoutSplit',
    component: CheckoutSplit
  }]
})

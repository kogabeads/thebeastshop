import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import vip from '@/pages/vip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/vip',
      component: vip
    }
  ]
})

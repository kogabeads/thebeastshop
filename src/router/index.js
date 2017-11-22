import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import vip from '@/pages/vip'
import goodsList from '@/pages/goodsList'

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
    },
    {
      path: '/goodsList',
      component: goodsList
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index'
import scrollNumber from '@/components/demo-scroll-Number/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/Home',
      component: Home
    },{
      path: '/scrollNumber',
      name: 'scrollNumber',
      component: scrollNumber
    }
  ]
})

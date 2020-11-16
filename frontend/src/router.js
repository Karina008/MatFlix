import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home')
    },
    {
      path: "/404",
      name: "PageNotFound",
      component: () => import('@/views/PageNotFound')
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('@/views/SignUp')
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/Main')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('@/views/DetailStore')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/SearchStore')
    },
  ]
})
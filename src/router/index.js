import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/pages/mainPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'mainPage',
        component: MainPage
    }
]

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  
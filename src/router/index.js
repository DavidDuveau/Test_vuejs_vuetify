import Vue from 'vue'
import VueRouter from 'vue-router'
import AppList from '../views/AppList.vue'
import Login from '../views/Login.vue'
import AppEventDetails from '../views/AppEventDetails.vue'
import AppCreateEvent from '../views/AppCreateEvent.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppList',
    component: AppList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/create',
    name: 'Create',
    component: AppCreateEvent
  },
  {
    path: '/Event/:id',
    name: 'AppEventDetails',
    component: AppEventDetails,
    props: true
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

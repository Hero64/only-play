import Vue from 'vue'
import Router from 'vue-router'
// Authentication
import Auth from '@/components/Auth'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'
// Home
import Home from '@/components/Home'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'users',
          name: 'user',
          component: Users
        }
      ]
    }
  ]
})

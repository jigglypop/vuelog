import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { HomeRouters } from '@/router/home'
import { AuthRouters } from '@/router/auth'
import { PostRouters } from '@/router/post'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  ...HomeRouters,
  ...AuthRouters,
  ...PostRouters,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

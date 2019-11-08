import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5944858c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1640d176 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _f04a5060 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _3391a9f9 = () => interopDefault(import('../pages/share.vue' /* webpackChunkName: "pages/share" */))
const _61bbd16c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _5944858c,
    name: "contact"
  }, {
    path: "/map",
    component: _1640d176,
    name: "map"
  }, {
    path: "/projects",
    component: _f04a5060,
    name: "projects"
  }, {
    path: "/share",
    component: _3391a9f9,
    name: "share"
  }, {
    path: "/",
    component: _61bbd16c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

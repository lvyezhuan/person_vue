import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/logPage'
      },
      {
        path: '/logPage',
        name: 'logPage',
        component: () => import('../views/LogPage.vue')
      },
      {
        path: '/MailPage',
        name: 'MailPage',
        component: () => import('../views/MailPage.vue')
      },
      {
        path: '/ToolPage',
        name: 'ToolPage',
        component: () => import('../views/ToolPage.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

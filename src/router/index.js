import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayoutView from "../views/LayoutView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Layout",
    component: LayoutView,
    children:[{
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/my',
      name: 'My',
      component: () => import("../views/MyView.vue")
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import("../views/SearchView.vue")
    }]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"active"
  
})

export default router

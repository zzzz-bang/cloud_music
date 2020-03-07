import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommond from '@/views/Recommond.vue'
import Hotsong from '@/views/Hotsong.vue'
import Search from '@/views/Search.vue'
import Detail from '@/views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/recommond',
    component: Recommond,
  },
  {
    path: '/hotsong',
    component: Hotsong
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/detail/:playlistId',
    component: Detail
  },
  {
    path:'*',
    redirect: '/recommond', 
  }
]

const router = new VueRouter({
  routes
})

export default router

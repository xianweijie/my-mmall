import Router from 'vue-router'
import home from '../views/home/home.vue'
const classify = () => (import('../views/classify/classify.vue'))
const follow = () => (import('../views/follow/follow.vue'))

const routes = [
  // 任何根路径下为空的路径都重定向到/home
  { path: '', redirect: '/home' },
  { path: '/home', component: home, name: 'home' },
  { path: '/classify', component: classify, name: 'classify' },
  { path: '/follow', component: follow, name: 'follow' }
]
const router = new Router({
  mode: 'history',
  routes
})
export default router

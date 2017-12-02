import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Route code splitting
const IndexView = () => import('@/views/Index.vue')
const TopicView = () => import('@/views/topic/Topic.vue')
const DetailView = () => import('@/views/detail/Detail.vue')
//

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: IndexView },
    { path: '/topic/:id', component: TopicView },
    { path: '/detail/:id', component: DetailView }
  ]
})

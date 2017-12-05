import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Route code splitting
const AdminView = () => import('@/views/admin/Admin.vue')
const IndexView = () => import('@/views/Index.vue')
const TopicView = () => import('@/views/topic/Topic.vue')
const NewArticleView = () => import('@/views/admin/NewArticle.vue')
const DetailView = () => import('@/views/detail/Detail.vue')
const SearchView = () => import('@/views/Search.vue')
//

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/admin', component: AdminView },
    { path: '/admin/new-article', component: NewArticleView },
    { path: '/', component: IndexView },
    { path: '/topic/:id', component: TopicView },
    { path: '/detail/:id', component: DetailView },
    { path: '/search', component: SearchView }
  ]
})

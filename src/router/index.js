import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/admin/AdminView.vue'
import LoginView from '../views/auth/LoginView.vue'
import authUseStore from '../stores/authStore'
import AdminLayout from '../components/layouts/AdminLayout.vue'
import NewPhraseView from '../views/admin/NewPhraseView.vue'
import PhrasesListView from '../views/admin/PhrasesListView.vue'
import DocsView from '../views/docs/DocsView.vue'
import DocsLayout from '../components/layouts/DocsLayout.vue'
import GetMultipleView from '../views/docs/GetMultipleView.vue'
import GetSimpleView from '../views/docs/GetSimpleView.vue'
import GetLanguageView from '../views/docs/GetLanguageView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/api',
      redirect: '/docs',
      component: DocsLayout,
      children: [
        { path: '/docs', name: 'Docs', component: DocsView },
        { path: '/endpoints', name: 'Endpoints', redirect: '/endpoints/single' },
        { path: '/endpoints/single', name: 'SimplePhrase', component: GetSimpleView },
        { path: '/endpoints/multiple', name: 'MultiplePhrases', component: GetMultipleView },
        { path: '/endpoints/language', name: 'LanguagePhrases', component: GetLanguageView }
      ]
    },
    {
      path: '/admin',
      redirect: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        { path: '/admin', name: 'Admin', component: AdminView },
        { path: '/admin/new', name: 'NewPhrase', component: NewPhraseView },
        { path: '/admin/list', name: 'PhrasesList', component: PhrasesListView }
      ]
    },
    {
      path: '/login',
      name: 'Auth',
      meta: { isGuest: true },
      children: [
        {
          path: '/login',
          name: 'Login',
          component: LoginView
        }
      ]
    },
    { path: '/404', component: NotFoundView },
    { path: '/:pathMatch(.*)*', redirect: '/404' }
  ]
})

router.beforeEach((to, from, next) => {
  const store = authUseStore()
  if (to.meta.requiresAuth && !store.token) {
    next({ name: 'Login' })
  } else if (store.token && to.meta.isGuest) {
    next({ name: 'Admin' })
  } else {
    next()
  }
})

export default router

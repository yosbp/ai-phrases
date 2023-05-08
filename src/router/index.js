import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/admin/AdminView.vue'
import LoginView from '../views/auth/LoginView.vue'
import authUseStore from '../stores/authStore'
import AdminLayout from '../components/AdminLayout.vue'
import NewPhraseView from '../views/admin/NewPhraseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/admin',
      redirect: '/admin',
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        { path: '/admin', name: 'Admin', component: AdminView },
        { path: '/admin/new', name: 'NewPhrase', component: NewPhraseView },
/*      { path: '/surveys', name: 'Surveys', component: SurveysView },
        { path: '/surveys/create', name: 'SurveyCreate', component: SurveysInternalView },
        { path: '/surveys/:id', name: 'SurveyView', component: SurveysInternalView } */
      ]
    },
    {
      path: '/auth',
      redirect: '/login',
      name: 'Auth',
      meta: {isGuest: true},
      children: [
        {
          path: '/login',
          name: 'Login',
          component: LoginView
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = authUseStore()
  if (to.meta.requiresAuth && !store.token) {
    next({ name: 'Login' })
  } else if (store.token && (to.meta.isGuest)) {
    next({ name: 'Admin' })
  } else {
    next()
  }
})

export default router

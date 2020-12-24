import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/players'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/players'
      },
      {
        path: 'players',
        component: () => import('@/views/PlayersView.vue')
      },
      {
        path: 'teams',
        component: () => import('@/views/TeamsView.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  },
  {
    path: '/players/add',
    component: () => import('../views/PlayerAddView.vue')
  },
  {
    path: '/players/:id',
    component: () => import('../views/PlayerEditView.vue')
  },
  {
    path: '/teams/add',
    component: () => import('../views/TeamAddView.vue')
  },
  {
    path: '/teams/:id',
    component: () => import('../views/TeamEditView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

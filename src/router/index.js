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
        path: 'games',
        component: () => import('@/views/GamesView.vue')
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
  {
    path: '/games/add',
    component: () => import('../views/GameAddView.vue')
  },
  {
    path: '/games/edit/:id',
    component: () => import('../views/GameEditView.vue')
  },
  {
    path: '/games/view/:id',
    component: () => import('../views/GameDetailsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

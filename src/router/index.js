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
        redirect: '/tabs/players'
      },
      {
        path: 'players',
        component: () => import('@/views/PlayersView.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GymView from '../views/GymView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
          component: HomeView,
      },

      {
          path: '/gym/:myString',
          name: 'gym',
          component: GymView,
          props: true
      },

  ]
})



export default router

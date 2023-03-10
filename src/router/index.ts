import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import GymView from '../views/GymView.vue'
import TestView from '../views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      },
      {
          path: '/test',
          name: 'test',
          component: TestView,
      },
      {
          path: '/contact',
          name: 'contact',
          component: ContactView,
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

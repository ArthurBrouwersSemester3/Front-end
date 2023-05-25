import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GymView from '../views/GymView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'


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
      {
          path: '/Login',
          name: 'Login',
          component: LoginView,
      },
      {
          path: '/Profile',
          name: 'Profile',
          component: ProfileView,
      },

  ]
})



export default router

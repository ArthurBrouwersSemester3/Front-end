import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GymView from '../views/GymView.vue'
import LoginView from '../views/LoginView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import { createAuthGuard } from "@auth0/auth0-vue";


const router = createRouter({
  history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginView,
        },
    {
      path: '/home',
      name: 'home',
        component: HomeView,
        beforeEnter: createAuthGuard(),
      },

      {
          path: '/gym/:myString',
          name: 'gym',
          component: GymView,
          props: true,
          beforeEnter: createAuthGuard(),
      },

      {
          path: '/Profile',
          name: 'Profile',
          component: ProfileView,
          beforeEnter: createAuthGuard(),
      },

  ]
})



export default router

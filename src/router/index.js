import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import SummarizationView from '../views/SummarizationView.vue'
import SimplificationView from '../views/SimplificationView.vue'
import ImageView from '../views/ImageView.vue'
import GraphView from '../views/GraphView.vue'
import SignUpView from '../views/SignUpView.vue'
import LogInView from '../views/LogInView.vue'
import TasksView from '../views/TasksView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/summarization',
      name: 'summarization',
      component: SummarizationView
    },
    {
      path: '/simplification',
      name: 'simplification',
      component: SimplificationView
    },
    {
      path: '/image',
      name: 'image',
      component: ImageView
    },
    {
      path: '/graph',
      name: 'graph',
      component: GraphView
    },
    {
      path: '/register',
      name: 'register',
      component: SignUpView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView,
      meta: {
        hideNavbar: true,
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
    },
  ]
})

export default router

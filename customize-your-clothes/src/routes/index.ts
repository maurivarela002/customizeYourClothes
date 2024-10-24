import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isAuthenticated, isNotAuthenticated } from '@/routes/guards';
import workspaceRouter from '@/modules/workspace/router/index'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        beforeEnter: [isNotAuthenticated],
        component: () => import(/* webpackChunkName: "Login"*/ '@/modules/login/views/Login.vue'),
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/workspace',
        beforeEnter: [isAuthenticated],
        ...workspaceRouter
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

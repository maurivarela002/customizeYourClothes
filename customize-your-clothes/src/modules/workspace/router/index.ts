import { isAuthenticated } from "@/routes/guards"
import {  redirectDefaultDashboard } from "./guards"

export default {
    name: 'workspace',
    path: '/workspace',
    component: () => import(/* webpackChunkName: "daybook" */ '../layouts/WorkSpaceLayout.vue'),
    children: [
        {
            path: 'home',
            name: 'Home',
            // beforeEnter: [isAuthenticated],
            // meta: { authorization: ['dashboard.write', 'dashboard.read'] },
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/home/views/Home.vue')
        },
    ]

}



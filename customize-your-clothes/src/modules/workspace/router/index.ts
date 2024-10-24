import { isAuthenticated } from "@/routes/guards"
import {  redirectDefaultDashboard } from "./guards"

export default {
    name: 'workspace',
    component: () => import(/* webpackChunkName: "daybook" */ '../layouts/WorkSpaceLayout.vue'),
    children: [
        // {
        //     path: 'dashboard',
        //     name: 'Dashboard',
        //     beforeEnter: [isAuthenticated, redirectDefaultDashboard],
        //     meta: { authorization: ['dashboard.write', 'dashboard.read'] },
        //     component: () => import(/* webpackChunkName: "daybook-no-entry" */ '../../bo/dashboard/views/DashboardView.vue'),
        //     children: [
        //         {
        //             path: ':id',
        //             name: 'CustomDashboard',
        //             beforeEnter: [isAuthenticated],
        //             meta: { authorization: ['dashboard.write', 'dashboard.read'] },
        //             component: () => import(/* webpackChunkName: "daybook-no-entry" */ '../../bo/dashboard/components/DashboardContainer.vue'),
        //             props: true
        //         }
        //     ]
        // },
    ]

}



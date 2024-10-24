import { NavigationGuard } from 'vue-router'

export const redirectDefaultDashboard: NavigationGuard = async (to, from, next) => {
    next()
}
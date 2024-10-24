import { NavigationGuard } from 'vue-router'
// import { useSessionStore } from '../modules/login/stores/sessionStore'
// import { useSession } from '../modules/login/composables/useSession'


export const isAuthenticated: NavigationGuard = async (to, from, next) => {
    next()
}

export const isNotAuthenticated: NavigationGuard = async (to, from, next) => {
    next()
}
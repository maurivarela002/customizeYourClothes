<template>
    <v-layout class="flex-column" @drop.stop.prevent @dragover.stop.prevent>
        <Menu></Menu>
        <div class="contents">
            <router-view v-slot="{ Component }">
                <KeepAlive>
                    <component :is="Component" />
                </KeepAlive>
            </router-view>
        </div>
        <Footer></Footer>
    </v-layout>
</template>

<script lang="ts" setup>
const refreshTokenUI = async () => {
    // const { access_token, refresh_token, username } = useSession()
    // const resp = await service.refreshToken(access_token.value, refresh_token.value)
    // switch (resp?.status) {
    //     case 200: {
    //         const { newSession } = useSession()
    //         newSession({ ...resp?.data }, username.value, user_actions.value, user_preferences?.value || { lang: 'es', timezone: 'America/Montevideo', theme: 'dark' })
    //         break;
    //     }
    //     case 400:
    //     case 401: {
    //         signOff()
    //         break;
    //     }
    // }
}

const signOff = async () => {
    // const menuStore = useMenuStore()
    // const sessionStore = useSessionStore()
    // const navigatorStore = useFrameTabNavigatorStore()
    // const resp = await service.logout()

    // sessionStore.$reset()
    // navigatorStore.$reset()
    // menuStore.$reset()
    // router.replace({ path: '/login' })
}


</script>

<style scoped>
.contents {
    background-color: var(--Gray-100);
    height: calc(100vh - 29px);
    padding-left: 60px;
}

.dashboard-menu {
    padding: 19px 23px;
    background-color: var(--White);
    display: flex;
    justify-content: flex-start;
    height: 32px;
    width: 100%;
}
</style>
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/plugins/i18n'
import '@/base.css'
import App from './App.vue'
import router from './routes'
import vuetify from '@/plugins/vuetify'
import 'vue-easy-dnd/dist/dnd.css'
import 'material-symbols'
// import "@/css/toastify.css"
import 'vuetify/styles'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .use(vuetify)
    .mount('#app')

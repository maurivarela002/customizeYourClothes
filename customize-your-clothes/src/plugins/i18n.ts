import { createI18n } from "vue-i18n";
import es from '@/locales/login/es.json';

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'es',
    availableLocales: ['es', 'en'],
    messages: {
        es: es
    }
})
import { createI18n } from 'vue-i18n';
import ruLocale from "./locales/ru.json";
import kzLocale from "./locales/kz.json";
import enLocale from "./locales/en.json";

let locale = localStorage.language || 'ru'

const i18n = createI18n({
    legacy: false,
    locale: locale,
    fallbackLocale: "ru",
    messages: {
        ru: ruLocale,
        kz: kzLocale,
        en: enLocale,
    },

});

export default i18n;
import { createI18n } from 'vue-i18n';
import ruLocale from "./locales/ru.json";
import kzLocale from "./locales/kz.json";
import enLocale from "./locales/en.json";

const i18n = createI18n({
    locale: 'ru',  // Установите язык по умолчанию
    messages: {
        ru: ruLocale,
        kz: kzLocale,
        en: enLocale,
    },

});

export default i18n;
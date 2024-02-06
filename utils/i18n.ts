import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/public/locales/en.json"
import ru from "@/public/locales/ru.json"
import uz from "@/public/locales/uz.json"

const resources = {
    en,
    uz,
    ru
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
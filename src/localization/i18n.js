import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import enTranslation from "./translations/en.json";
import ruTranslation from "./translations/ru.json";
import ukTranslation from "./translations/uk.json";

const resources = {
  en: { translation: enTranslation },
  uk: {
    translation: ukTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    // debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

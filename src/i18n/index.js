import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: ["ru", "en"],
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: [
        "localStorage",
        "sessionStorage",
        "cookie",
        // "htmlTag",
      ],
      caches: [
        "localStorage",
        "sessionStorage",
        "cookie",
        // "htmlTag",
      ],
      lookupLocalStorage: "i18nextLng",
      lookupSessionStorage: "i18nextLng",
    },
  });

export default i18n;

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// import './i18n';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationsEN from '../public/locales/en/translation.json';
import translationsRU from '../public/locales/en/translation.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  // debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: {
    en: { translations: { ...translationsEN } },
    ru: { translations: { ...translationsRU } },
  },
});

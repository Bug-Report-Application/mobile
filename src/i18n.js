import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './lang/en.json';
import translationPT from './lang/pt.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'pt',
  lng: 'pt',
  resources: {
    en: {
      translation: translationEN,
    },
    pt: {
      translation: translationPT,
    },
  },
});

export default i18n;

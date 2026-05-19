import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEn from './locales/en/common.json'
import battlesEn from './locales/en/battles.json'
import commonZh from './locales/zh/common.json'
import battlesZh from './locales/zh/battles.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEn,
        battles: battlesEn
      },
      zh: {
        common: commonZh,
        battles: battlesZh
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['common', 'battles'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

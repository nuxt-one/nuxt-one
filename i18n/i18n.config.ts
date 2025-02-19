import { currentLocales } from './i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'zh-CN',
  availableLocales: currentLocales.map(l => l.code)
}))

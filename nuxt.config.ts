import { currentLocales } from './i18n/i18n'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-auth-utils',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n'
  ],

  devtools: { enabled: true },

  colorMode: {
    classSuffix: ''
  },

  build: {
    transpile: ['trpc-nuxt']
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-01-21',

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },

  i18n: {
    lazy: true,
    locales: currentLocales,
    defaultLocale: 'zh-CN',
    strategy: 'no_prefix',

    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'zh-CN'
    },

    vueI18n: './i18n/i18n.config.ts'
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./app/components/ui"
     */
    componentDir: './app/components/ui'
  }
})

import tailwindcss from '@tailwindcss/vite'
import { currentLocales } from './i18n/i18n'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'shadcn-nuxt'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],

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

  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      target: 'esnext'
    },
    optimizeDeps: {
      include: [
        'lucide-vue-next',
        '@iconify/vue',
        '@vueuse/core',
        'clsx',
        'class-variance-authority',
        'reka-ui',
        'tailwind-merge'
      ]
    }
  },

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

    // Relative to the i18n directory
    vueI18n: './i18n.config.ts',

    bundle: {
      // https://github.com/nuxt-modules/i18n/issues/3238#issuecomment-2672492536
      optimizeTranslationDirective: false
    }
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

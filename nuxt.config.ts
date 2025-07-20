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

  compatibilityDate: '2025-07-20',

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
        'tailwind-merge',
        'better-auth/vue'
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
    locales: currentLocales,
    defaultLocale: 'zh-CN',
    strategy: 'no_prefix',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      fallbackLocale: 'zh-CN'
    },

    // Relative to the i18n directory
    vueI18n: './i18n.config.ts',

    experimental: {
      localeDetector: 'localeDetector.ts'
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

export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-auth-utils',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxtjs/color-mode'
  ],

  devtools: { enabled: true },

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

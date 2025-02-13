export default defineNuxtConfig({

  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils', '@nuxt/eslint'],
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
  }
})

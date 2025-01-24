export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['trpc-nuxt']
  },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-auth-utils",
  ],
  compatibilityDate: "2025-01-21",
})
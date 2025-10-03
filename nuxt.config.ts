// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-quasar-ui'
  ],
  css: [
    '/assets/main.css'
  ]
})
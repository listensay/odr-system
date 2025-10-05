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
    'nuxt-quasar-ui',
    'dayjs-nuxt'
  ],
  css: [
    '/assets/main.css'
  ],
  runtimeConfig: {
    public: {
      api_url: process.env.API_URL
    }
  },
  nitro: {
    devProxy: {
      '/api': process.env.API_URL
    }
  },
})
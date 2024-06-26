// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-og-image', 'nuxt-icon'],
  ogImage: {
    compatibility: {
      prerender: {
        chromium: false
      },
    }
  },
  nitro: {
    firebase: {
      gen: 2,
      nodeVersion: "20"
    }
  }
})

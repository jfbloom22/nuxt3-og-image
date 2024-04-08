// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-og-image', 'nuxt-icon'],
  ogImage: {
    runtimeChromium: false,
    // defaults: {
    //   width: 200,
    //   height: 200,
    // }
  },
  nitro: {
    firebase: {
      gen: 2
    }
  }
})

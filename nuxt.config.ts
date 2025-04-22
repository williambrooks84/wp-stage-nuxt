// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-ripple', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Nunito: [200, 400, 600, 700, 800, 1000], // you can customize weights
    },
    display: 'swap', // optional but recommended
  },
  css: ['@/assets/css/main.css'],
})

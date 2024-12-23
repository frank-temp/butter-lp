// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        title: 'buttercms-marketing-site',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'A description of your Nuxt project goes here.' },
            { name: 'author', content: 'buttercms-marketing-site' },
            { name: 'keywords', content: 'nuxt, vue, ssr, seo, javascript' },
        ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/ysq3lwd.css'
        }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: {
    enabled: true,
    timeline: { enabled: true, },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
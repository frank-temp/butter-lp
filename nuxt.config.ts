// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:"width=device-width, initial-scale=1.0"
        }
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
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
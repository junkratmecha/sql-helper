export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sqlヘルパー',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SQL業務をサポートします' },
      { hid: 'keywords', name: 'keywords', content: 'SQL,自動化,ヘルパー' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-0EGLNQ291C'
  },
  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-1273257045654054",
        pageLevelAds: true, // 自動広告を表示させる場合
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  },
  router: {
    base: '/'
  },

  generate: {
    dir: 'docs'
  },
}

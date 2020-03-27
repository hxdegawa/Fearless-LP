const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])

module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:image',
        content: 'https://fearlessf.herokuapp.com/ogp.png'
      },
      {
        name: 'twitter:description',
        content:
          'FEARLESS - 国内・海外において企画から納品までのブランディングを自社で手がける新時代広告制作会社'
      },
      { name: 'twitter:title', content: 'FEARLESS' },
      {
        hid: 'description',
        name: 'description',
        content:
          'FEARLESS - 国内・海外において企画から納品までのブランディングを自社で手がける新時代広告制作会社'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'FEARLESS' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://fearlessf.herokuapp.com/'
      },
      { hid: 'og:title', property: 'og:title', content: 'FEARLESS' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'FEARLESS - 国内・海外において企画から納品までのブランディングを自社で手がける新時代広告制作会社'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://fearlessf.herokuapp.com/ogp.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700&display=swap&subset=japanese"'
      }
    ]
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#212121' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/youtube-embed.js',
    '~plugins/vimeo-embed.js',
    { src: '~/plugins/carousel', ssr: false }
  ],
  // serverMiddleware: [{ path: '~/api/', handler: '~/api/' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  styleResources: {
    scss: ['@/assets/scss/_variable.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

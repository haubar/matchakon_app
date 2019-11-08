const env = require('dotenv').config()


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'matchakon 抹茶',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        property: 'og:title',
        content: '抹茶控',
        template: chunk => `${chunk} - 抹茶控`,
        vmid: 'og:title'
      },
      {
        property: 'og:locale',
        content: 'zh_TW',
        vmid: 'og:locale'
      },
      {
        property: 'og:site_name',
        content: 'matchakon 抹茶控',
        vmid: 'og:site_name'
      },
      {
        property: 'og:url',
        content: 'matchakon.cc',
        vmid: 'og:url'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', async: true, defer: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/vendor/bootstrap/css/bootstrap.min.css',
	  '@/assets/css/grayscale.css',
	  '@/assets/css/infinite-scroll-docs.css',
	  '@/assets/css-extend/extend-grayscale.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

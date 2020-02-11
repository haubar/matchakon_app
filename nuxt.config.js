const env = require('dotenv').config()


export default {
  mode: 'universal',
  env: {
    apiBaseUrl: process.env.apiBaseUrl || 'https://us-central1-matchakon-api.cloudfunctions.net/'
  },
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
      // {src: '//stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.js', async: true, defer: true },
      // { src: '@/assets/vendor/bootstrap/js/bootstrap/bootstrap.min.js' }
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
    // 'element-ui/lib/theme-chalk/index.css',
    // '@/assets/vendor/bootstrap/css/bootstrap.min.css',
    // '@/assets/scss/grayscale.scss',
    '@/assets/sass/extend-grayscale.sass'
	  // '@/assets/css/grayscale.css',
	  // '@/assets/css/infinite-scroll-docs.css',
	  // '@/assets/css-extend/extend-grayscale.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/ga.js', mode: 'client' }
    // { src: '~plugins/vue-infinite-loading', ssr: false}
    // { src: '~plugins/vue-infinite-loading', ssr: 'client' },
    // { src: '~plugins/vue-infinite-loading', ssr: 'server' }
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
    // '@nuxtjs/axios',
    ['bootstrap-vue/nuxt'],
    ['@nuxtjs/google-adsense'],
    ['nuxt-leaflet']
  ],
  'google-adsense': {
    id: 'ca-pub-2884277132041854'
  },
  bootstrapVue: {
    componentPlugins: [
      'CollapsePlugin'
    ]
  },
  // axios: {
  //   proxy: false,
  //   baseURL: 'https://us-central1-matchakon-api.cloudfunctions.net/'
  // },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    html: {
      // minify:
      // {
      //   collapseBooleanAttributes: false,
      //   decodeEntities: false,
      //   minifyCSS: true,
      //   minifyJS: true,
      //   processConditionalComments: false,
      //   removeEmptyAttributes: false,
      //   removeRedundantAttributes: false,
      //   trimCustomFragments: false,
      //   useShortDoctype: false
      // }
    },
    loaders: {
      pugPlain: 
        { pretty: true }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },


}

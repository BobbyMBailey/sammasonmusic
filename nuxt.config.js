const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sam Mason Music',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sam Mason Music' },
      /** Eventually this will move just to the StyleGuide layout as https://github.com/nuxt/nuxt.js/issues/3036 */
      { hid: 'robots', name: 'robots', content: 'noindex' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /**
   * CSS
   */
  css: [
    '@/assets/atoms.scss'
  ],

  plugins: [
  ],

  modules: [
    '~/modules/vue-bem',
    ['nuxt-seo-module', {
      baseUrl: 'http://www.sammasonmusic.com',
      noGeneratedSitemapInRobotsTxT: true,
      sitemap: [{
        generate: true,
        baseUrl: 'http://www.sammasonmusic.com',
        path: 'sitemap.v2.xml'
      }],
      robots: {
        UserAgent: '*',
        Disallow: '/v2',
        Sitemap: 'sitemap.xml'
      }
    }],
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/fontawesome-free-solid'
        },
        {
          set: '@fortawesome/fontawesome-free-brands'
        }
      ]
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        // https://github.com/vuejs/vue/tree/dev/dist
        config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          },
          {
            test: /\.(scss)$/,
            use: [
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [path.resolve(__dirname, 'node_modules')],
                  alias: {
                    '@material/': path.resolve('./node_modules/@material')
                  }
                }
              }
            ],
            exclude: /(node_modules)/
          }
        )
      }
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.loaders.scss = 'vue-style-loader!css-loader!sass-loader?' + JSON.stringify({
        includePaths: [
          path.resolve(__dirname), 'node_modules'
        ],
        alias: {
          '@material/': path.resolve('./node_modules/@material')
        }
      })
    }
  }
}

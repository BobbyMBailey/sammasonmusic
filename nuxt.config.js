const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sam Mason Music',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sam Mason Music' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /**
   * Where our code is at
   */
  srcDir: 'src/',

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
    ['@nuxtjs/google-analytics', {
      id: 'UA-39633531-1'
    }],
    ['nuxt-seo-module', {
      baseUrl: 'https://www.sammasonmusic.com',
      noGeneratedSitemapInRobotsTxT: true,
      sitemap: [{
        generate: true,
        baseUrl: 'https://www.sammasonmusic.com',
        path: 'sitemap.xml',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        exclude: [
          '/styleguide'
        ]
      }],
      robots: {
        UserAgent: '*',
        Disallow: '/styleguide',
        Sitemap: 'sitemap.xml'
      }
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
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
                  includePaths: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules')
                  ],
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
          path.resolve(__dirname, 'src'),
          path.resolve('node_modules')
        ],
        alias: {
          '@material/': path.resolve('./node_modules/@material')
        }
      })
    }
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sam Mason Music',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sam Mason Music' }
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
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

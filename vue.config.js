const path = require('path')

module.exports = {
  configureWebpack: config => {
    const vueLoader = config.module.rules.find((rule) => {
      return rule.use.find((rule) => rule.loader === 'vue-loader')
    }).use[0]
    vueLoader.options.loaders.scss = 'vue-style-loader!css-loader!sass-loader?' + JSON.stringify({
      includePaths: [
        path.resolve(__dirname), 'node_modules'
      ],
      alias: {
        '~/': path.resolve(__dirname),
        '@material/': path.resolve(__dirname, 'node_modules/@material')
      }
    })
    config.resolve.alias = {
      '~': path.resolve(__dirname),
      '@material': path.resolve(__dirname, 'node_modules/@material')
    }
  }
}

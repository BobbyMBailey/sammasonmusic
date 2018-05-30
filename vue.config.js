const path = require('path')
const fs = require('fs')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'test') {
      // exclude NPM deps from test bundle
      config.externals.push(require('webpack-node-externals')())
      // use inline source map so that it works with mocha-webpack
      config.devtool = 'inline-cheap-module-source-map'

      config.output = {
        // use absolute paths in sourcemaps (important for debugging via IDE)
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
      }

      config.module.rules.unshift({
        test: /\.(js)/,
        include: path.resolve('src'), // instrument only testing sources with Istanbul, after ts-loader runs
        loader: 'istanbul-instrumenter-loader',
        query: {
          esModules: true
        }
      })
    }

    const vueLoader = config.module.rules.find((rule) => {
      return rule.use && rule.use.find((rule) => rule.loader === 'vue-loader')
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

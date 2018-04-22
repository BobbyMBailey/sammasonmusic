const path = require('path')
const rules = require('vue-webpack-loaders')
const resolve = path.resolve

module.exports = {
  components: 'components/**/*.vue',
  require: [
    path.join(__dirname, 'assets/atoms.scss')
  ],
  webpackConfig: {
    resolve: {
      extensions: ['.vue'],
      alias: {
        '~': resolve(__dirname, ''),
        '@': resolve(__dirname, '')
      }
    },
    module: {
      rules
    }
  },
  showUsage: true
}

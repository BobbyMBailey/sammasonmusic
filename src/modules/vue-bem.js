const path = require('path')

module.exports = function VueBEM () {
  this.addPlugin(path.resolve(__dirname, '../plugins/vue-bem.js'))
}

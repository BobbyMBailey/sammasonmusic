import Vue from 'vue'
import VueBemCn from 'vue-bem-cn'

Vue.use(VueBemCn, {
  methodName: 'bem',
  hyphenate: true,
  delimiters: {
    ns: 'mason-'
  }
})

import Vue from 'vue'
import VueBemCn from 'vue-bem-cn'

const bemConfig = {
  methodName: 'bem',
  hyphenate: true,
  delimiters: {
    ns: 'mason-'
  }
}

Vue.use(VueBemCn, bemConfig)

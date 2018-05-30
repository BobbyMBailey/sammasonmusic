import VueBemCn from 'vue-bem-cn'
import 'webcomponents.js/MutationObserver'

const setupVueBEM = vue => {
  vue.use(VueBemCn, {
    methodName: 'bem',
    hyphenate: true,
    delimiters: {
      ns: 'mason-'
    }
  })
}

export default function (vue) {
  Object.defineProperty(global, 'MutationObserver', {value: window.MutationObserver})
  setupVueBEM(vue)
}

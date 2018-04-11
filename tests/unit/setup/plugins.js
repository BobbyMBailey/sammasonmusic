import VueBemCn from 'vue-bem-cn'

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
  setupVueBEM(vue)
}

import NuxtLink from '../../../../.nuxt/components/nuxt-link'
import VueRouter from 'vue-router'

export default function (Vue, routes = ['']) {
  Vue.component(NuxtLink.name, NuxtLink)
  let router = new VueRouter({routes: routes.map(value => {
    return {path: value, name: value}
  })})
  Vue.use(router)
  return {
    router: router
  }
}

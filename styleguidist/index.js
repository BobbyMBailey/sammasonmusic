import Vue from 'vue'
import createStore from './store'
import NuxtLink from 'nuxt/lib/app/components/nuxt-link'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.component(NuxtLink.name, NuxtLink)
createStore()

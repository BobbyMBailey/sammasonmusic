<template>
  <div>
    <mason-drawer v-model="isDrawerOpen"/>
    <nuxt/>
    <mason-footer/>
  </div>
</template>

<script>
import MasonDrawer from '~/components/Drawer.vue'
import MasonFooter from '~/components/Footer.vue'
import MasonHeader from '~/components/Header.vue'
import StructuredData from '~/utils/structured-mason'

export default {
  head: {
    script: [
      { innerHTML: JSON.stringify(StructuredData.getMusicGroup()), type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  components: {
    MasonDrawer,
    MasonFooter,
    MasonHeader
  },
  computed: {
    isDrawerOpen: {
      get () {
        return this.$store.state.isDrawerOpen
      },
      set (value) {
        this.$store.commit('setDrawerOpen', value)
      }
    }
  }
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

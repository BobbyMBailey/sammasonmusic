<template>
  <div>
    <mason-header/>
    <nuxt/>
    <mason-footer/>
  </div>
</template>

<script>
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
    MasonFooter,
    MasonHeader
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

<template>
  <div>
    <nuxt/>
    <mason-footer/>
  </div>
</template>

<script>
import MasonFooter from '~/components/Footer.vue'
import StructuredData from '~/utils/structured-mason'

export default {
  head: {
    script: [
      { innerHTML: JSON.stringify(StructuredData.getMusicGroup()), type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  components: {
    MasonFooter
  }
}
</script>

<style>
html {
  box-sizing: border-box;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  word-spacing: 1px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

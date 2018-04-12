<template>
  <div>
    <nuxt/>
    <mason-footer/>
  </div>
</template>

<script>
import MasonFooter from '~/components/Footer.vue'

export default {
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

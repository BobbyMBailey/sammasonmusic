<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  name: 'Styleguide',
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>

<style>
  /** No style */
</style>

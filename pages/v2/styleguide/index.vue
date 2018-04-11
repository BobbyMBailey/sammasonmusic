<template>
  <article>
    <mason-section
      title="Footer">
      <mason-footer/>
    </mason-section>
  </article>
</template>

<script>
import MasonSection from '~/components/Section.vue'
import MasonFooter from '~/components/Footer.vue'

export default {
  layout: 'styleguide',
  components: {
    MasonFooter,
    MasonSection
  }
}
</script>

<style scoped>
</style>

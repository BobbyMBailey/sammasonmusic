<template>
  <article>
    <mason-section title="Example">
      <mason-footer/>
    </mason-section>

    <mason-section title="Full Width">
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

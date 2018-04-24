<template>
  <main>
    <mason-section id="hero">
      <site-progress/>
    </mason-section>
  </main>
</template>

<script>
import MasonSection from '~/components/Section.vue'
import SiteProgress from '~/components/SiteProgress.vue'

export default {
  name: 'About',
  components: {
    MasonSection,
    SiteProgress
  }
}
</script>

<style lang="scss" scoped>
  /** No style */
</style>

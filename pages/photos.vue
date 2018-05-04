<template>
  <main>
    <mason-header :block-modifiers="['pushdown', 'background-invert', 'typography-invert', 'smallscreen-only']"/>
    <mason-section :content-modifiers="['no-bottom-space']">
      <mason-card
        class="mason-card--full mason-card--content-center">
        <div
          slot="title">I've include a few photos, but connect with me on
          <a
            href="https://instagram.com/sammasonmusic"
            target="_blank">Instagram</a>
          to stay up to date and see more</div>
      </mason-card>
    </mason-section>
    <mason-section
      :content-modifiers="['center', 'mobile-column']"
      title="Photos">
      <mason-card>
        <img
          slot="media"
          src="/images/sam-mason-promo-photo-1.jpg"
          width="100%"
          height="100%">
      </mason-card>
      <mason-card>
        <img
          slot="media"
          src="/images/sam-mason-promo-photo-3.jpg"
          width="100%"
          height="100%">
      </mason-card>
    </mason-section>
  </main>
</template>

<script>
import MasonCard from '~/components/Card.vue'
import MasonHeader from '~/components/Header.vue'
import MasonNavigation from '~/components/Navigation.vue'
import MasonSection from '~/components/Section.vue'

export default {
  name: 'Photos',
  components: {
    MasonCard,
    MasonHeader,
    MasonNavigation,
    MasonSection
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/Grid';
</style>

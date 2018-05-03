<template>
  <main>
    <mason-header
      :block-modifiers="[]"/>
    <mason-section
      :content-modifiers="['center', 'set-height', 'column', 'column-top']"
      class="mason-hero"
      background-image="/v2/images/4577_full_focus_dark.jpg"/>
    <mason-section :block-modifiers="['center']">
      <iframe
        src="https://embed.spotify.com/?uri=spotify%3Auser%3Amase0013%3Aplaylist%3A0L89wV8i8UplqmtcaOA72b"
        width="100%"
        height="380"
        frameborder="0"
        allowtransparency="true"/>
    </mason-section>
    <mason-section :block-modifiers="['center']">
      <iframe
        width="100%"
        height="325"
        scrolling="no"
        frameborder="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3183553&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"/>
    </mason-section>
  </main>
</template>

<script>
import MasonCard from '~/components/Card.vue'
import MasonHeader from '~/components/Header.vue'
import MasonSection from '~/components/Section.vue'

export default {
  name: 'Music',
  components: {
    MasonCard,
    MasonHeader,
    MasonSection
  }
}
</script>

<style lang="scss">
  @import 'assets/Hero';

  .mason-hero {
    height: 300px;
  }

  @media (max-width: 860px) {
    .mason-hero {
      background-position-x: 72%;
    }
  }

  @media (min-width: 540px) {
    .mason-hero {
      background-position-y: 30%;
    }
  }
</style>

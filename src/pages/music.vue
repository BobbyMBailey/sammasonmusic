<template>
  <main>
    <mason-header :block-modifiers="['background-invert', 'typography-invert', 'smallscreen-only']"/>
    <mason-section
      :content-modifiers="['center', 'column', 'set-height']"
      class="mason-hero"
      background-image="/images/4577_full_focus_dark_14.jpg">
      <p/>
      <mason-card class="hero-quote mason-card--quote mason-card--medium">
        <p slot="text">Don't erase and don't be afraid to make mistakes.</p>
        <p
          slot="cite"
          class="mason-typography--caption">Sam Mason</p>
      </mason-card>
    </mason-section>
    <mason-section
      :block-modifiers="['center']"
      title="Listen">
      <mason-card class="mason-card--medium">
        <iframe
          slot="text"
          src="https://embed.spotify.com/?uri=spotify%3Auser%3Amase0013%3Aplaylist%3A0L89wV8i8UplqmtcaOA72b"
          width="100%"
          height="380"
          frameborder="0"
          allowtransparency="true"/>
      </mason-card>
      <mason-card class="mason-card--medium">
        <iframe
          slot="text"
          width="100%"
          height="325"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/3183553&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"/>
      </mason-card>
    </mason-section>
  </main>
</template>

<script>
import MasonCard from '~/components/Card.vue'
import MasonHeader from '~/components/Header.vue'
import MasonSection from '~/components/Section.vue'

export default {
  name: 'Music',
  head () {
    return {
      meta: [
        { hid: 'description', name: 'description', content: 'Listen to Sam Mason\'s music on Spotify and SoundCloud' }
      ]
    }
  },
  components: {
    MasonCard,
    MasonHeader,
    MasonSection
  }
}
</script>

<style lang="scss" src="../assets/Hero.scss"/>
<style lang="scss" scoped>
  @import '../assets/theme/_colors';

  .mason-hero {
    height: 400px;
  }

  .hero-quote {
    background-color: $theme-background-color--primary;
    height: auto;
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

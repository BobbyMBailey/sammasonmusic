<template>
  <main>
    <mason-header
      :block-modifiers="['no-background', 'typography-invert', 'smallscreen-only']"/>
    <mason-section
      id="hero"
      :content-modifiers="['center', 'set-height', 'column', 'column-top']"
      background-image="/v2/images/4577_full_focus_dark.jpg">
      <h1 style="display:  none;">Sam Mason</h1>
      <h3>Enter Email for Free Music and Updates</h3>
      <signup/>
    </mason-section>
    <mason-section
      :content-modifiers="['nowrap', 'mobile-wrap', 'mobile-column', 'mobile-center']"
      title="Updates">
      <img src="~/assets/images/album_givemeasign.jpg">
      <p>My alt-country album, <i>Give Me a Sign</i>, is still available for download via
        <a
          class="atom-text-color--primary"
          href="https://noisetrade.com/sammasonmusic/give-me-a-sign"
          target="_blank">NoiseTrade</a>!
        <br>
        Connect with me on social media using the links below!</p>
    </mason-section>
  </main>
</template>

<script>
import MasonHeader from '~/components/Header.vue'
import MasonSection from '~/components/Section.vue'
import Signup from '~/components/Signup.vue'

export default {
  name: 'Home',
  components: {
    MasonHeader,
    MasonSection,
    Signup
  }
}
</script>

<style lang="scss">
  @import 'assets/theme/colors';
  @import '@material/elevation/mixins';

  #hero {
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;

    .mason-section__content h1 {
      color: $typography-color--secondary;
    }
  }

  @media (max-width: 860px) {
    #hero {
      background-position-x: 72%;
    }
  }

  @media (min-width: 1300px) {
    .mason-section__content {
      padding-top: 80px;
    }
  }

  .mason-footer {
    background-image: url('/v2/images/4577_footer.jpg') !important;
  }
</style>

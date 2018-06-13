<template>
  <main>
    <mason-header
      :block-modifiers="['no-background', 'typography-invert', 'smallscreen-only']"/>
    <mason-section
      id="hero"
      :content-modifiers="['center', 'set-height', 'column', 'column-top']"
      class="mason-hero"
      background-image="/images/4577_full_focus_dark_14.jpg">
      <p
        aria-hidden="true"
        class="mason-hero__item--mobile-only">Enter Email for Free Music and Updates</p>
      <a
        aria-hidden="true"
        class="atom-text-color--tertiary mason-hero__item--mobile-only"
        href="#Subscribe"
        style="margin-top: 0.5em;">
        <font-awesome-icon
          :icon="['far', 'arrow-alt-circle-down']"
          size="2x"/>
      </a>
      <h3 class="mason-hero__item--mobile-hide">Enter Email for Free Music and Updates</h3>
      <signup class="mason-hero__item--mobile-hide"/>
    </mason-section>
    <mason-section
      id="Subscribe"
      :content-modifiers="['center', 'mobile-wrap', 'column', 'mobile-center']"
      title="Subscribe">
      <p>Enter Email for Free Music and Updates</p>
      <signup/>
    </mason-section>
  </main>
</template>

<script>
import MasonHeader from '~/components/Header.vue'
import MasonSection from '~/components/Section.vue'
import Signup from '~/components/Signup.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
fontawesome.library.add(brands, solid, regular)

export default {
  name: 'Home',
  components: {
    FontAwesomeIcon,
    MasonHeader,
    MasonSection,
    Signup
  }
}
</script>

<style lang="scss" src="../assets/Hero.scss"/>
<style lang="scss" scoped>
  @import 'assets/theme/colors';

  #hero {
    .mason-section__content {
      padding-top: 80px;
    }

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

  @media (min-width: 1200px) {
    #hero {
      background-position-y: 17%;
    }
  }

  .mason-footer {
    background-image: url('/images/4577_footer_16.jpg') !important;
  }
</style>

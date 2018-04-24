<template>
  <main>
    <mason-section
      id="hero"
      :content-modifiers="['center', 'set-height']"
      background-image="/v2/images/4577.jpg">
      <p class="atom-text-color--primary-dark">
        My alt-country album, <i>Give Me a Sign</i>, is still available for download via
        <a
          href="https://noisetrade.com/sammasonmusic/give-me-a-sign"
          target="_blank">NoiseTrade</a>!
        <br>
        Connect with me on social media using the links below!
      </p>
      <signup/>
    </mason-section>
    <site-progress/>
  </main>
</template>

<script>
import MasonSection from '~/components/Section.vue'
import Signup from '~/components/Signup.vue'
import SiteProgress from '~/components/SiteProgress.vue'

export default {
  name: 'Home',
  components: {
    MasonSection,
    Signup,
    SiteProgress
  }
}
</script>

<style lang="scss" scoped>
  #hero {
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (max-width: 860px) {
    #hero {
      background-position-x: 72%;
    }
  }
</style>

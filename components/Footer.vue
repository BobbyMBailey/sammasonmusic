<template>
  <footer :class="bem()">
    <social-links :items="socialItems" />
    <span class="mason-typography--fineprint-dark">Sam Mason 2018 &copy;</span>
  </footer>
</template>

<script>
import SocialLinks from '~/components/SocialLinks.vue'
export default {
  name: 'Footer',
  components: {
    SocialLinks
  },
  data () {
    return {
      socialItems: this.$store.state.socialLinks
    }
  }
}
</script>

<style lang="scss">
  @import 'assets/Footer';
</style>

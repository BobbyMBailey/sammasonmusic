<template>
  <div :class="[bem(''), blockClass]">
    <div :class="bem('info')">
      <font-awesome-icon
        :icon="['far', 'envelope-open']"
        :class="bem('info-icon')"/>
    </div>
    <div :class="bem('links')">
      <h3>Booking</h3>
      <p>
        booking@sammasonmusic.com
      </p>
      <h3>Other Inquiries</h3>
      <p>sam@sammasonmusic.com</p>
      <h3>Social</h3>
      <social-links
        :block-modifiers="['typography-invert']"
        :items="socialItems"/>
    </div>
  </div>
</template>

<script>
import BEMModifiers from './mixins/bem-modifiers'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import SocialLinks from './SocialLinks.vue'
import fontawesome from '@fortawesome/fontawesome'
import regular from '@fortawesome/fontawesome-free-regular'
fontawesome.library.add(regular)

export default {
  name: 'Contact',
  components: {
    FontAwesomeIcon,
    SocialLinks
  },
  mixins: [BEMModifiers],
  data () {
    return {
      socialItems: this.$store.state.socialLinks
    }
  }
}
</script>

<style lang="scss" src="../assets/atoms.scss"/>
<style lang="scss" src="../assets/Contact.scss"/>

<docs>
  ```jsx
     <Contact/>
  ```
</docs>

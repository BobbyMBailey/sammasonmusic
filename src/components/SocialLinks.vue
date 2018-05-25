<template>
  <ul :class="[bem(), blockClass]">
    <li
      v-for="item in items"
      :class="bem('item')"
      :key="item.link">
      <a
        :href="item.link"
        :aria-label="item.label"
        target="_blank"
        rel="noopener">
        <font-awesome-icon
          :icon="['fab', item.icon]"
          :class="bem('icon')"/>
      </a>
    </li>
  </ul>
</template>

<script>
import BEMModifiers from './mixins/bem-modifiers'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
fontawesome.library.add(brands)

export default {
  name: 'SocialLinks',
  components: {
    FontAwesomeIcon
  },
  mixins: [BEMModifiers],
  props: {
    items: {
      type: Array,
      default () {
        return {items: []}
      }
    }
  }
}
</script>

<style lang="scss" src="../assets/SocialLinks.scss"/>

<docs>
  ```jsx
  <SocialLinks :items="[
        {label: 'Facebook', icon: 'facebook', link: 'https://facebook.com/sammasonmusic'},
        {label: 'Instagram', icon: 'instagram', link: 'https://instagram.com/sammasonmusic'}]"/>
  ```
</docs>

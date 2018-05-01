<template>
  <ul :class="[bem(), blockClass]">
    <li
      v-for="item in items"
      :class="bem('item')"
      :key="item.link">
      <a
        :href="item.link"
        :aria-label="item.label"
        target="_blank">
        <font-awesome-icon
          :icon="['fab', item.icon]"
          :class="bem('icon')"/>
      </a>
    </li>
  </ul>
</template>

<script>
import BEMModifiers from './mixins/bem-modifiers'
import SocialLinks from '~/components/SocialLinks.vue'

export default {
  name: 'SocialLinks',
  components: {
    SocialLinks
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

<style lang="scss" scoped>
  @import 'assets/SocialLinks';
</style>

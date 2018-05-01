<template>
  <nav :class="[bem(), blockClass]">
    <ul :class="bem('list')">
      <li
        v-for="item in items"
        :class="[bem('item'), item.keepOnSmallScreen ? bem('item') + '--small-screen' : '']"
        :key="(item.link ? item.link : '') + (item.label ? item.label : '')">
        <a
          v-if="item.link && item.link.indexOf('#') === 0"
          :aria-label="item.label"
          :class="bem('link')"
          :href="item.link">
          <font-awesome-icon
            v-if="item.icon && !item.drawerIconOnly"
            :icon="item.icon"
            :class="bem('icon')"/> {{ item.onlyIcon ? '' : item.label }}
        </a>
        <nuxt-link
          v-else
          :aria-label="item.label"
          :class="bem('link')"
          :to="item.link"
          :replace="typeof item.external === 'boolean' ? item.external : true">
          <font-awesome-icon
            v-if="item.icon && !item.drawerIconOnly"
            :icon="item.icon"
            :class="bem('icon')"/> {{ item.onlyIcon ? '' : item.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import BEMModifiers from './mixins/bem-modifiers'

export default {
  name: 'Navigation',
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

<style lang="scss">
  @import 'assets/Navigation';
</style>

<docs>
  ```jsx
  <mason-navigation :items="[{ label: 'Example' }, { label: 'Sample' }]"/>
  ```
</docs>

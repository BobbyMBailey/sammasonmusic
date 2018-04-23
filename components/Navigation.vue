<template>
  <nav :class="bem()">
    <ul :class="bem('list')">
      <li
        v-for="item in items"
        :class="[bem('item'), item.keepOnSmallScreen ? bem('item') + '--small-screen' : '']"
        :key="(item.link ? item.link : '') + (item.label ? item.label : '')">
        <a
          :aria-label="item.label"
          :class="bem('link')"
          :href="item.link"
          :target="item.target">
          <font-awesome-icon
            v-if="item.icon"
            :icon="item.icon"
            :class="bem('icon')"/> {{ item.onlyIcon ? '' : item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
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

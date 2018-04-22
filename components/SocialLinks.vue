<template>
  <ul :class="bem()">
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
export default {
  name: 'SocialLinks',
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

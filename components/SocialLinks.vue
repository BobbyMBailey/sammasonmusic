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

<style scoped>
  .mason-social-links {
    list-style: none;
  }

  .mason-social-links__item {
    display: inline;
    padding-right: 0.9em;
    white-space: nowrap;
  }

  .mason-social-links__icon {
    color: grey;
  }
</style>

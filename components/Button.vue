<template>
  <a
    :class="bem()"
    :href="link"
    :target="target">{{ label }}
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: {
      type: String,
      default: '#'
    },
    label: {
      type: String,
      default: 'Button'
    },
    target: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/theme/colors';

  .mason-button {
    align-items: center;
    border: 1px solid $mason-theme-color--primary;
    border-radius: 2px;
    box-sizing: border-box;
    display: inline-flex;
    font-size: 0.875rem;
    font-weight: 500;
    height: 36px;
    justify-content: center;
    margin: 4px;
    min-width: 64px;
    padding: 4px 14px;
    text-transform: uppercase;
  }

  .mason-button:hover {
    position: relative;
    top: 1px;
    background-color: $theme-background-color--tertiary-dark;
    color: $typography-color--primary-dark;
    opacity: 0.7;
  }

  a {
    color: $typography-color--primary;
  }

</style>

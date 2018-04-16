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
    border: 1px solid $theme-background-color--primary;
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
    opacity: 0.12;
    transition-duration: 75ms;
  }

  .mason-button::before {
    transition: opacity 15ms linear;
    z-index: 1;
  }

  .mason-button::before,
  .mason-button::after {
    background-color: $theme-background-color--primary;
    border-radius: 50%;
    content: '';
    height: 200%;
    left: calc(50% - 100%);
    pointer-events: none;
    position: absolute;
    top: calc(50% - 100%);
    width: 200%;
  }

  .mason-button:hover::before {
    opacity: 0.04;
  }

  a {
    color: $typography-color--primary;
  }
</style>

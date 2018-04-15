<template>
  <div>
    <a
      :class="bem()"
      :href="link"
      :target="target">{{ label }}
    </a>
  </div>
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
  .mason-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    height: 36px;
    border-radius: 2px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.875rem;
    border: 1px solid black;
    padding: 4px 14px;
    margin: 4px;
  }

  a {
    color: black;
  }
</style>

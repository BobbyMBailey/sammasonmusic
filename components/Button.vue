<template>
  <button
    :class="bem()"
    :target="target"
    :type="type"
    @click="onClick">{{ label }}
  </button>
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
    },
    type: {
      type: String,
      default: null
    }
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/Button';
</style>

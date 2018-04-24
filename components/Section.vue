<template>
  <section
    :id="id"
    :class="bem()"
    :style="sectionClass">
    <div :class="bem('title')">
      <h1>{{ title }} <slot name="title"/></h1>
    </div>
    <div :class="[bem('content'), contentClass]">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    contentModifiers: {
      type: Array,
      default: null
    },
    backgroundImage: {
      type: String,
      default: null
    }
  },
  computed: {
    sectionClass: function () {
      let backgroundImage = !this.backgroundImage ? {} : {
        backgroundImage: `url(${this.backgroundImage})`
      }
      return Object.assign({}, backgroundImage)
    },
    contentClass: function () {
      if (!this.contentModifiers) {
        return ''
      }
      return this.contentModifiers.map((value) => this.bem('content') + '--' + value).join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/Section';
</style>

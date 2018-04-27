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
import { default as BEMModifiers, getModifiers } from './mixins/bem-modifiers'

export default {
  name: 'Section',
  mixins: [BEMModifiers],
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
      return getModifiers(this, 'content')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/Section';
</style>

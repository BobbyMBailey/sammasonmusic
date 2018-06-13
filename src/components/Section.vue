<template>
  <section
    :id="id"
    :class="bem()"
    :style="sectionClass">
    <div
      v-if="hasSlot('title') || !!title"
      :class="bem('title')">
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
  },
  methods: {
    hasSlot: function (name = 'default') {
      return !!this.$slots[ name ] || !!this.$scopedSlots[ name ]
    }
  }
}
</script>

<style lang="scss" src="../assets/Section.scss" />

<docs>
  ```jsx
  <Section title="Sections can have titles"/>
  ```

  **TODOS**

  * Consider using `<img>` tag for background image within a new element and with a style of `{ position: absolute; top: 0; bottom: 0; left: 0; }`
</docs>

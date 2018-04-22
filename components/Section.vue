<template>
  <section :class="bem()">
    <div :class="bem('title')">
      <h1 :id="id">{{ title }} <slot name="title"/></h1>
    </div>
    <div :class="bem('content', contentModifiers)">
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
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/Section';
</style>

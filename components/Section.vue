<template>
  <section :class="bem()">
    <div :class="bem('title')"><h1>{{ title }}</h1></div>
    <div :class="bem('content')">
      <slot/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .mason-section {
    margin-top: 2em;
  }

  .mason-section__title {
    padding-bottom: 1em;
    color: dodgerblue;
  }
</style>

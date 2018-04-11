<template>
  <section :class="bem()">
    <div :class="bem('title')"><h1>{{ title }}</h1></div>
    <div :class="bem('content', contentModifiers)">
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
    },
    contentModifiers: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  $content-max-width: 1080px;

  .mason-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .mason-section__content {
    max-width: $content-max-width;
    display: flex;
    align-self: center;
    justify-content: left;
    align-items: left;
    overflow: hidden;
    flex-wrap: wrap;
    width: 100%;
  }

  .mason-section__content--column {
    flex-direction: column;
  }

  .mason-section__title {
    padding-bottom: 1em;
    color: dodgerblue;
    display: flex;
    align-self: center;
    max-width: 1160px;
    width: 100%;
  }
</style>

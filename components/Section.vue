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
    margin: 0;
    padding-bottom: 2em;
    padding-top: 2em;
    width: 100%;
  }

  .mason-section__content {
    align-items: left;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    max-width: $content-max-width;
    overflow: hidden;
    width: 100%;
  }

  .mason-section__content--column {
    flex-direction: column;
  }

  .mason-section__title {
    align-self: center;
    color: rgb(30, 144, 255);
    display: flex;
    max-width: 1160px;
    padding-bottom: 1em;
    width: 100%;
  }
</style>

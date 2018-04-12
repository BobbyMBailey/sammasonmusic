<template>
  <div :class="bem()">
    <div :class="bem('media')">
      <slot name="media"/>
    </div>
    <div :class="bem('title')">
      <slot name="title"/>
    </div>
    <div :class="bem('text')">
      <slot name="text"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>

  .mason-card {
    display: flex;
    flex-direction: column;
    width: 21.875em;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 1em;
    height: 100%;
  }

  .mason-card__media {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
    object-fit: contain;
  }

  .mason-card__title {
    padding: 0 1.1em;
  }

  .mason-card__text {
    padding: 0 1.1em 1em;
    margin-top: 1em;
  }
</style>

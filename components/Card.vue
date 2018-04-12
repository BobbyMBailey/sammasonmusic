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
    border-radius: 2px;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 1em;
    width: 350px;
  }

  .mason-card--full {
    width: 100%;
  }

  .mason-card--medium {
    width: 50%;
  }

  .mason-card--small {
    width: 33%;
  }

  .mason-card__media {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    object-fit: contain;
    overflow: hidden;
  }

  .mason-card__title {
    padding: 0 1.1em;
  }

  .mason-card__text {
    padding-left: 1em;
  }
</style>

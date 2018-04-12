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
    width: 350px;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    margin: 1em;
    height: 100%;
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
    padding-left: 1em;
  }
</style>

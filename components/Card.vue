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
  @import 'assets/Card';
</style>

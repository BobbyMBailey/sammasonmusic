<template>
  <div :class="bem()">
    <div :class="bem('media')"/>
    <div :class="bem('title')"/>
    <div :class="bem('text')"/>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>

</style>

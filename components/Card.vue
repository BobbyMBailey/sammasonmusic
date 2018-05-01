<template>
  <div :class="bem()">
    <div
      :v-if="hasSlot('media')"
      :class="bem('media')">
      <slot name="media"/>
    </div>
    <div
      v-if="hasSlot('title')"
      :class="bem('title')">
      <slot name="title"/>
    </div>
    <div :class="bem('text')">
      <slot name="text"/>
    </div>
    <div
      :v-if="hasSlot('cite')"
      :class="bem('cite')">
      <slot name="cite"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    hasSlot: function (name = 'default') {
      return !!this.$slots[ name ] || !!this.$scopedSlots[ name ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/Card';
</style>

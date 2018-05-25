<template>
  <div :class="bem()">
    <div
      :v-if="hasSlot('media')"
      :class="bem('media')">
      <!-- @slot Optional. The `media` of the card. If not provided, the element will not add space -->
      <slot name="media"/>
    </div>
    <div
      v-if="hasSlot('title')"
      :class="bem('title')">
      <!-- @slot Optional. The `title` of the card. If not provided, the element will not add space -->
      <slot name="title"/>
    </div>
    <div :class="bem('text')">
      <!-- @slot Optional. The `cite` of the card. Always present -->
      <slot name="text"/>
    </div>
    <div
      :v-if="hasSlot('cite')"
      :class="bem('cite')">
      <!-- @slot Optional. The `cite` of the card. If not provided, the element will not add space -->
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

<style lang="scss" src="../assets/atoms.scss"/>
<style lang="scss" src="../assets/Card.scss"/>

<docs>
  ```jsx
  <Card>
    <img
      slot="media"
      src="http://via.placeholder.com/350x200">
    <h3 slot="title">Card Title</h3>
    <p slot="text">Card with typical card</p>
  </Card>
  ```

  Quote Card using `--quote` modifier
  ```jsx
  <Card class="mason-card--quote">
    <p slot="text">Card with typical card</p>
  </Card>
  ```

  Small Card using `--small` modifier
  ```jsx
    <Card class="mason-card--small">
      <img
        slot="media"
        src="http://via.placeholder.com/356x200">
      <h3 slot="title">Small Card</h3>
      <p slot="text">Suspendisse euismod nunc</p>
    </Card>
  ```

  Full size Card `--full` modifier
  ```jsx
    <Card class="mason-card--full">
      <img
        slot="media"
        src="http://via.placeholder.com/700x200">
      <h3 slot="title">Full Size</h3>
      <p slot="text">Suspendisse euismod nunc</p>
    </Card>
  ```
</docs>

<template>
  <button
    :class="bem()"
    :type="type"
    @click="onClick">{{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    /**
     * What is displayed to the user
     */
    label: {
      type: String,
      default: 'Button'
    },
    /**
     * Set the behavior of this button on the page. Currently the options are limited to standard types
     */
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['button', 'submit', 'reset', null].indexOf(value) !== -1
      }
    }
  },
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" src="../assets/atoms.scss"/>
<style lang="scss" src="../assets/Button.scss"/>

<docs>
  Default
  ```jsx
    <Button/>
  ```

  Submit button
  ```jsx
    <Button label="Subscribe" type="submit"/>
  ```
</docs>

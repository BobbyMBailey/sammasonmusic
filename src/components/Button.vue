<template>
  <button
    :class="bem()"
    :type="buttonType"
    @click="onClick">{{ label }}
  </button>
</template>

<script>
const allowedTypes = ['button', 'submit', 'reset']
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
      default: 'button',
      validator: function (value) {
        return allowedTypes.indexOf(value) !== -1
      }
    }
  },
  computed: {
    buttonType () {
      return allowedTypes.indexOf(this.type) !== -1 ? this.type : this.$options.props.type.default
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

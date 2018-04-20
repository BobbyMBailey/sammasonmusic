<template>
  <div class="mason-text-field">
    <input
      :placeholder="label"
      :id="id"
      class="mason-text-field__input"
      type="email">
    <label
      :for="id"
      class="mason-floating-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'EmailTextField',
  props: {
    label: {
      type: String,
      default: 'Email'
    }
  },
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = 'EmailTextField-' + Math.random().toString(36).slice(4)
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/theme/colors';
  .mason-text-field {
    height: 200px;
  }

  .mason-text-field__input {
    position: relative;
    top: 4em;
    left: 5.4px;
  }

  .mason-floating-label {
    padding: 5px 5px;
    display: block;
  }

  .mason-text-field__input:focus {
    border-bottom: 1.5px solid black;
  }

  input {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
  }

</style>

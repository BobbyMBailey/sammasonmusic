<template>
  <div :class="bem()">
    <mason-email-text-field/>
    <mason-button label="Submit"/>
  </div>
</template>

<script>
import MasonButton from './Button.vue'
import MasonEmailTextField from './EmailTextField.vue'

export default {
  name: 'Signup',
  components: {
    MasonButton,
    MasonEmailTextField
  }
}
</script>

<style lang="scss">
  /** No style */
</style>

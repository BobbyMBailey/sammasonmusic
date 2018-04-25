<template>
  <div :class="bem()">
    <mason-email-text-field :class="bem('email')"/>
    <mason-button
      :class="bem('submit')"
      label="Submit"/>
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
  @import 'assets/Signup';
</style>

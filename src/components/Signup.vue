<template>
  <form
    :class="bem()"
    action="https://sammasonmusic.us15.list-manage.com/subscribe/post?u=61784befad41735718b3dd819&amp;id=f1059c8942"
    method="post"
    class="validate"
    target="_blank"
    novalidate>
    <mason-email-text-field
      :value="email"
      :class="bem('email')"
      name="EMAIL"
      @input="onEmailChange"/>
    <mason-button
      :class="bem('submit')"
      type="submit"
      label="Subscribe"
      @click="onSubmit"/>
    <div
      style="position: absolute; left: -5000px; display: none;"
      aria-hidden="true">
      <input
        type="text"
        name="b_61784befad41735718b3dd819_f1059c8942"
        tabindex="-1"
        value="">
    </div>
  </form>
</template>

<script>
import MasonButton from './Button.vue'
import MasonEmailTextField from './EmailTextField.vue'

export default {
  name: 'Signup',
  components: {
    MasonButton,
    MasonEmailTextField
  },
  data () {
    return {
      email: null
    }
  },
  methods: {
    onSubmit () {
      this.$emit('submitted', {email: this.$data.email})
    },
    onEmailChange (value) {
      this.$data.email = value
    }
  }
}
</script>

<style lang="scss" src="../assets/Signup.scss"/>

<docs>
  ```jsx
     <Signup/>
  ```
</docs>

<!-- Most of this code was directly inspired by https://github.com/matsp/material-components-vue/tree/master/components/textfield -->
<template>
  <div
    :class="classes"
    class="mason-text-field mdc-text-field mdc-text-field--outlined mdc-text-field--dense mason-text-field--input-invert">
    <div class="mason-text-field__background"/>
    <input
      :id="id"
      :value="value"
      v-bind="$attrs"
      type="email"
      class="mdc-text-field__input"
      @input="onInput"
    >
    <label
      :id="id + '-label'"
      :for="id"
      class="mdc-floating-label"> {{ label }}
    </label>
    <div class="mdc-notched-outline mason-notched-outline">
      <svg>
        <path class="mdc-notched-outline__path"/>
      </svg>
    </div>
    <div class="mdc-notched-outline__idle mason-notched-outline__idle"/>
  </div>
</template>

<script>
import { MDCTextField } from '@material/textfield/dist/mdc.textfield'
import debounce from 'lodash.debounce'

export default {
  name: 'EmailTextField',
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    upgraded: {
      type: Boolean,
      default: false
    },
    focused: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Email'
    }
  },
  data () {
    return {
      id: null,
      mdcTextField: null
    }
  },
  computed: {
    classes () {
      return {
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--upgraded': this.upgraded,
        'mdc-text-field--focused': this.focused
      }
    }
  },
  created () {
    this.id = 'EmailTextField-' + Math.random().toString(36).slice(4)
  },
  mounted () {
    this.mdcTextField = MDCTextField.attachTo(this.$el)
  },
  beforeDestroy () {
    this.mdcTextField.destroy()
  },
  methods: {
    onInput (event) {
      debounce(() => this.$emit('input', event.target.value))
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@material/notched-outline/mdc-notched-outline';
  @import 'assets/EmailTextField';
</style>

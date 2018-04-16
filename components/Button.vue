<template>
  <a
    :class="bem()"
    :href="link"
    :target="target">{{ label }}
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    link: {
      type: String,
      default: '#'
    },
    label: {
      type: String,
      default: 'Button'
    },
    target: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import 'assets/theme/colors';
  @import '@material/button/mdc-button';
  @import '@material/button/mixins';

  .mason-button {
    @extend .mdc-button;
    @extend .mdc-button--stroked;
    @include mdc-button-stroke-width(1px);
  }

  // Alternate way and retaining the modifiers. However, for Sam we're probably wanting the default to be "stroked"
  .mason-button--raised,
  .mason-button--unelevated,
  .mason-button--stroked {
    .mason-button__icon {
      // Icons inside contained buttons have different styles due to increased button padding
      @include mdc-button__icon-contained_;
    }
  }

  .mason-button--raised,
  .mason-button--unelevated {
    @include mdc-button--filled_;
    @include mdc-button-container-fill-color(primary);
    @include mdc-button-ink-color(text-primary-on-primary);
    @include mdc-states(text-primary-on-primary);
  }

  .mason-button--raised {
    @include mdc-button--raised_;
  }

  .mason-button--stroked {
    @include mdc-button--stroked_;
    @include mdc-button-stroke-width(1px);
    @include mdc-button-stroke-color(primary);
  }

  .mason-button--dense {
    @include mdc-button--dense_;
  }

</style>

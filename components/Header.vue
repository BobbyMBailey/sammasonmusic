<template>
  <header :class="bem()">
    <div :class="bem('drawer-button')">
      <a><i
        aria-hidden="true"
        class="material-icons">menu</i></a>
    </div>
    <h2 :class="bem('title')">Sam Mason</h2>
    <mason-navigation :items="links"/>
  </header>
</template>

<script>
import MasonNavigation from '~/components/Navigation'

export default {
  name: 'Header',
  components: {
    MasonNavigation
  },
  data () {
    return {
      links: this.$store.state.headerNavigation
    }
  }
}
</script>

<style lang="scss">
   @import 'assets/Header.scss';
</style>

<docs>
  ```jsx
  <mason-header/>
  ```
</docs>

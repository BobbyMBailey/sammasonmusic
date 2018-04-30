<template>
  <header :class="[bem(), blockClass]">
    <div :class="bem('content')">
      <div :class="bem('drawer-button')">
        <a @click="toggleDrawer"><i
          aria-hidden="true"
          class="material-icons">menu</i></a>
      </div>
      <h2 :class="bem('title')">{{ title }}</h2>
      <mason-navigation :items="links"/>
    </div>
  </header>
</template>

<script>
import MasonNavigation from '~/components/Navigation'
import BEMModifiers from './mixins/bem-modifiers'
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  components: {
    MasonNavigation
  },
  mixins: [BEMModifiers],
  props: {
    title: {
      type: String,
      default: 'Sam Mason'
    }
  },
  data () {
    return {
      links: this.$store.state.headerNavigation
    }
  },
  methods: mapMutations(['toggleDrawer'])
}
</script>

<style lang="scss">
   @import 'assets/Header';
</style>

<docs>
  ```jsx
  <mason-header/>
  ```
</docs>

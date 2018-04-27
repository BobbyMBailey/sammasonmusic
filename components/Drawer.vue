<!-- Inspiration from https://github.com/matsp/material-components-vue/blob/master/components/drawer/DrawerTemporary/DrawerTemporary.vue-->
<template>
  <aside
    class="mdc-drawer mdc-drawer--temporary"
    @MDCTemporaryDrawer:close="model = false">
    <nav class="mdc-drawer__drawer">
      <header
        class="mdc-drawer__header"
        style="display: none;">
        <div class="mdc-drawer__header-content">
          <h2>Sam Mason</h2>
        </div>
      </header>
      <div class="mdc-drawer__toolbar-spacer"/>
      <div class="mdc-drawer__content">
        <nav>
          <ul class="mdc-list">
            <li
              v-for="item in links"
              :key="item.link + item.label">
              <nuxt-link
                :to="item.link"
                :replace="typeof item.external === 'boolean' ? item.external : true"
                class="mdc-list-item atom-text-color--primary">
                <font-awesome-icon
                  v-if="item.icon"
                  :icon="item.icon"
                  class="mdc-list-item__graphic"
                  aria-hidden="true"/>
                <font-awesome-icon
                  v-else
                  :icon="['fa', 'star']"
                  class="mdc-list-item__graphic"
                  aria-hidden="true"/>{{ item.label }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  </aside>
</template>

<script>
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer'

export default {
  name: 'Drawer',
  model: {
    prop: 'open',
    event: 'change'
  },
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mdcTemporaryDrawer: null,
      links: this.$store.state.headerNavigation
    }
  },
  computed: {
    model: {
      get () {
        return this.open
      },
      set (value) {
        this.$emit('change', value)
      }
    }
  },
  watch: {
    open () {
      this.mdcTemporaryDrawer.open = this.open
    }
  },
  mounted () {
    this.mdcTemporaryDrawer = MDCTemporaryDrawer.attachTo(this.$el)
    this.mdcTemporaryDrawer.open = this.open
  },
  beforeDestroy () {
    this.mdcTemporaryDrawer.destroy()
  }
}
</script>

<style lang="scss">
  @import '@material/drawer/mdc-drawer';
  @import '@material/list/mdc-list';
</style>

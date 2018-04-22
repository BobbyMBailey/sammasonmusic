import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isDrawerOpen: false,
      headerNavigation: [
        { label: 'Home', link: '#' },
        { label: 'Me', link: '#' },
        { label: 'Us', link: '#' },
        { label: 'Music', link: '#' },
        { label: 'Press', link: '#' },
        { label: 'Videos', link: '#' },
        { label: 'Subscribe', link: '#', icon: ['fa', 'envelope'], onlyIcon: true, keepOnSmallScreen: true }
      ]
    },
    mutations: {
      openDrawer (state) {
        state.isDrawerOpen = true
      },
      closeDrawer (state) {
        state.isDrawerOpen = false
      },
      toggleDrawer (state) {
        state.isDrawerOpen = !state.isDrawerOpen
      }
    }
  })
}

export default createStore

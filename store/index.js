import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isDrawerOpen: false,
      headerNavigation: [
        { label: 'Home', link: '/v2', icon: ['fa', 'home'] },
        { label: 'About', link: '/v2/about', icon: ['fa', 'user'], drawerIconOnly: true },
        { label: 'Music', link: '/v2/music', icon: ['fa', 'music'], drawerIconOnly: true },
        { label: 'Press', link: '/v2/press', icon: ['fa', 'newspaper'], drawerIconOnly: true },
        { label: 'Videos', link: '#', icon: ['fab', 'youtube'], drawerIconOnly: true },
        { label: 'Contact', link: '/v2/contact', icon: ['fa', 'comments'], drawerIconOnly: true },
        { label: 'Subscribe', link: '/v2/subscribe', icon: ['fa', 'envelope'], onlyIcon: true, keepOnSmallScreen: true }
      ],
      socialLinks: [
        {label: 'Facebook', icon: 'facebook', link: 'https://facebook.com/sammasonmusic'},
        {label: 'Instagram', icon: 'instagram', link: 'https://instagram.com/sammasonmusic'},
        {label: 'Twitter', icon: 'twitter', link: 'https://twitter.com/sammasonmusic'},
        {label: 'iTunes', icon: 'apple', link: 'https://itunes.apple.com/us/artist/sam-mason/id126382024'},
        {label: 'Amazon', icon: 'amazon', link: 'http://a.co/25kYCom'},
        {label: 'Spotify', icon: 'spotify', link: 'https://open.spotify.com/artist/27aimHoc7Q3MC3N6opoled'},
        {label: 'Soundcloud', icon: 'soundcloud', link: 'https://soundcloud.com/sammason'},
        {label: 'YouTube', icon: 'youtube', link: 'http://www.youtube.com/sammasonmusic1'}
      ]
    },
    mutations: {
      openDrawer (state) {
        state.isDrawerOpen = true
      },
      closeDrawer (state) {
        state.isDrawerOpen = false
      },
      setDrawerOpen (state, isOpen) {
        state.isDrawerOpen = isOpen
      },
      toggleDrawer (state) {
        state.isDrawerOpen = !state.isDrawerOpen
      }
    }
  })
}

export default createStore

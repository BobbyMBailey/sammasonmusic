import Vue from 'vue'
import Vuex from 'vuex'
import createStore from '../src/store/index'

export default () => {
  Vue.use(Vuex)
  Vue.prototype.$store = createStore(null, {
    isDrawerOpen: true,
    headerNavigation: [
      { label: 'Home', link: '#', icon: ['fa', 'home'] },
      { label: 'About', link: '#', icon: ['fa', 'user'], drawerIconOnly: true },
      { label: 'Music', link: '#', icon: ['fa', 'music'], drawerIconOnly: true },
      { label: 'Press', link: '#', icon: ['fa', 'newspaper'], drawerIconOnly: true },
      { label: 'Contact', link: '#', icon: ['fa', 'comments'], drawerIconOnly: true },
      { label: 'Subscribe', link: '#', icon: ['fa', 'envelope'], onlyIcon: true, keepOnSmallScreen: true }
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
  })
}

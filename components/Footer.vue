<template>
  <footer :class="bem()">
    <social-links :items="socialItems" />
    <span class="mason-typography--fineprint">Sam Mason 2018 &copy;</span>
  </footer>
</template>

<script>
import SocialLinks from '~/components/SocialLinks.vue'
export default {
  name: 'Footer',
  components: {
    SocialLinks
  },
  data () {
    return {
      socialItems: [
        {label: 'Facebook', icon: 'facebook', link: 'https://facebook.com/sammasonmusic'},
        {label: 'Instagram', icon: 'instagram', link: 'https://instagram.com/sammasonmusic'},
        {label: 'Twitter', icon: 'twitter', link: 'https://twitter.com/sammasonmusic'},
        {label: 'iTunes', icon: 'apple', link: 'https://itunes.apple.com/us/artist/sam-mason/id126382024'},
        {label: 'Amazon', icon: 'amazon', link: 'http://a.co/25kYCom'},
        {label: 'Spotify', icon: 'spotify', link: 'https://open.spotify.com/artist/27aimHoc7Q3MC3N6opoled'},
        {label: 'Soundcloud', icon: 'soundcloud', link: 'https://soundcloud.com/sammason'},
        {label: 'YouTube', icon: 'youtube', link: 'http://www.youtube.com/sammasonmusic1'}
      ]
    }
  }
}
</script>

<style>
  .mason-footer {
    bottom: 0;
    margin: 0 auto;
    padding-bottom: 1em;
    padding-top: 1em;
    position: relative;
    text-align: center;
    width: 100%;
  }
</style>

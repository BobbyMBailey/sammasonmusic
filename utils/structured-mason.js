/**
 * Defaults for the Google Structured Data used to generate Knowledge Panels
 */
import StructuredData from './structured'

const defaultMusicGroup = {
  name: 'Sam Mason Music',
  url: 'http://www.sammasonmusic.com',
  description: 'Sam Mason is an alt-country singer/songwriter musical artist from Fort Worth, Texas',
  sameAs: [
    'http://www.facebook.com/sammasonmusic',
    'https://www.instagram.com/sammasonmusic',
    'https://www.twitter.com/sammasonmusic',
    'https://www.reverbnation.com/sammasonmusic',
    'https://itunes.apple.com/us/artist/sam-mason/id126382024',
    'http://a.co/25kYCom',
    'https://open.spotify.com/artist/27aimHoc7Q3MC3N6opoled',
    'https://www.soundcloud.com/sammason',
    'http://www.youtube.com/sammasonmusic1',
    'https://plus.google.com/b/102814863945927532788/102814863945927532788',
    'https://www.musicbrainz.org/artist/f15039b5-19f6-4c9d-b9e0-2b25858ca0b0'
  ]
}

const defaultPotentialActions = [{
  target: [{
    urlTemplate: 'https://open.spotify.com/artist/27aimHoc7Q3MC3N6opoled?autoplay=true',
    actionPlatform: [
      'http://schema.org/DesktopWebPlatform',
      'http://schema.org/AndroidPlatform',
      'http://schema.org/IOSPlatform'
    ]
  }]
}]

export default {
  getMusicGroup: function (overrides) {
    return StructuredData.getTypeMusicGroup(Object.assign({}, defaultMusicGroup, {potentialAction: defaultPotentialActions}, overrides))
  }
}

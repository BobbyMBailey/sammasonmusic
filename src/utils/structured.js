/**
 * In order to get a Knowledge Panel and into Google's Knowledge Graph we need "Structured Data"
 * https://developers.google.com/search/docs/data-types/music
 */

/**
 * http://schema.org/EntryPoint
 * @param values
 * @returns {{"@type": string, urlTemplate: string, actionPlatform: string[], InLanguage: string}}
 */
const getTypeEntryPoint = (values = {}) => {
  return {
    '@type': 'EntryPoint',
    'urlTemplate': values.urlTemplate || 'http://www.example.com/artist/Example/?autoplay=true',
    'actionPlatform': Array.isArray(values.actionPlatform) ? values.actionPlatform : [
      'http://schema.org/DesktopWebPlatform'
    ],
    'InLanguage': values.InLanguage || 'USD'
  }
}

/**
 * http://schema.org/ListenAction
 * @param values
 */
const getTypeListenAction = (values = {}) => {
  // All are required by Google
  return {
    '@type': 'ListenAction',
    'target': Array.isArray(values.target) ? values.target.map(getTypeEntryPoint) : [getTypeEntryPoint(
      {
        'urlTemplate': 'android-app://com.example.app/examplescheme/artist/Example/?autoplay=true',
        'actionPlatform': ['http://schema.org/AndroidPlatform']
      })
    ],
    'expectsAcceptanceOf': {
      '@type': 'Offer',
      'eligibleRegion': [
        {
          '@type': 'Country',
          'name': 'US'
        }
      ]
    }
  }
}

/**
 * http://schema.org/MusicGroup
 * @param values
 */
const getTypeMusicGroup = (values = {}) => {
  const required = {
    '@context': 'http://schema.org',
    '@type': 'MusicGroup',
    // The above properties cannot be changed
    'description': values.description || 'A biography of the artist or a description of the album',
    'name': values.name || 'Artist or album name',
    'url': values.url || 'URL of the landing page of the artist or album on the partner site.',
    'potentialAction': Array.isArray(values.potentialAction) ? values.potentialAction.map(getTypeListenAction) : [getTypeListenAction()]
  }
  const recommended = {
    'sameAs': values.sameAs || 'URL of a page that unambiguously identifies the artist or album. Example: Wikipedia.'
  }

  if (Array.isArray(values.image)) {
    // Repeated field of ImageObject or URL
    // Please see https://developers.google.com/search/docs/data-types/music for image requirements
    recommended.image = values.image
  }

  return Object.assign({}, required, recommended)
}

export default {
  getTypeEntryPoint: getTypeEntryPoint,
  getTypeMusicGroup: getTypeMusicGroup,
  getTypeListenAction: getTypeListenAction
}

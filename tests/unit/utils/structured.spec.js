import { expect } from 'chai'
import StructuredData from '../../../utils/structured'

describe('Rich Card Structured Data util', () => {
  describe('getTypeEntryPoint', () => {
    it('returns defaults', () => {
      let results = StructuredData.getTypeEntryPoint()
      expect(results).to.have.property('@type', 'EntryPoint')
      expect(results).to.have.property('urlTemplate')
      expect(results).to.have.property('actionPlatform')
      expect(results).to.have.property('InLanguage')
    })

    it('does not override @type', () => {
      let results = StructuredData.getTypeEntryPoint({
        '@type': 'Changed!'
      })
      expect(results).to.have.property('@type', 'EntryPoint')
    })

    it('actionPlatform must be an Array', () => {
      let results = StructuredData.getTypeEntryPoint({'actionPlatform': 'Changed!'})
      expect(results.actionPlatform).to.be.a('array')
    })

    it('returns allowed set values and only those values', () => {
      let results = StructuredData.getTypeEntryPoint({
        'urlTemplate': 'Changed!',
        'actionPlatform': ['Changed!'],
        'InLanguage': 'Changed!'
      })
      expect(results).to.have.property('urlTemplate', 'Changed!')
      expect(results).to.have.property('actionPlatform')
      expect(results.actionPlatform).to.eql(['Changed!'])
      expect(results).to.have.property('InLanguage', 'Changed!')
    })
  })

  describe('getTypeListenAction', () => {
    it('returns defaults', () => {
      let results = StructuredData.getTypeListenAction()
      expect(results).to.have.property('@type', 'ListenAction')
      expect(results).to.have.property('expectsAcceptanceOf')
      expect(results).to.have.property('target')
    })

    it('does not override @type', () => {
      let results = StructuredData.getTypeListenAction({
        '@type': 'Something Else'
      })
      expect(results).to.have.property('@type', 'ListenAction')
    })

    it('actionPlatform must be an Array', () => {
      let results = StructuredData.getTypeListenAction({'target': 1})
      expect(results.target).to.be.a('array')
    })

    it('returns target converted to EntryPoint', () => {
      let results = StructuredData.getTypeListenAction({
        'target': [{urlTemplate: 'Changed!', actionPlatform: ['Changed!']}]
      })
      expect(results).to.have.property('target')
      expect(results.target).to.be.a('array')
      expect(results.target[0]).to.have.property('@type', 'EntryPoint')
      expect(results.target[0]).to.have.property('urlTemplate', 'Changed!')
      expect(results.target[0]).to.have.property('actionPlatform')
      expect(results.target[0].actionPlatform).to.eql(['Changed!'])
    })
  })

  describe('getTypeMusicGroup', () => {
    it('returns expected required keys using defaults', () => {
      let results = StructuredData.getTypeMusicGroup()
      expect(results).to.have.property('@context', 'http://schema.org')
      expect(results).to.have.property('@type', 'MusicGroup')
      expect(results).to.have.property('url', 'URL of the landing page of the artist or album on the partner site.')
      expect(results).to.not.have.property('image')
      expect(results).to.have.property('name')
      expect(results).to.have.property('sameAs')
      expect(results).to.have.property('potentialAction')
      expect(results).to.have.property('description', 'A biography of the artist or a description of the album')
    })

    it('does not override @type or @context', () => {
      let results = StructuredData.getTypeMusicGroup({
        '@type': 'Something Else',
        '@context': 'Something Else'
      })
      expect(results).to.have.property('@type', 'MusicGroup')
      expect(results).to.have.property('@context', 'http://schema.org')
    })

    it('potentialAction is ListenAction type', () => {
      let result = StructuredData.getTypeMusicGroup({
        potentialAction: [{'target': [{}]}]
      })
      expect(result.potentialAction).to.be.a('array')
      expect(result.potentialAction[0]).to.have.property('@type', 'ListenAction')
    })

    it('allows certain keys to change values ', () => {
      let results = StructuredData.getTypeMusicGroup({
        url: 'http://example.io',
        image: [
          'https://example.com/photos/1x1/photo.jpg'
        ],
        name: 'J Band 2018',
        sameAs: 'http://myspace.com',
        description: 'lorem'
      })
      expect(results).to.have.property('url', 'http://example.io')
      expect(results).to.have.property('image').and.to.be.a('array')
      expect(results.image).to.eql([
        'https://example.com/photos/1x1/photo.jpg'
      ])
      expect(results).to.have.property('name', 'J Band 2018')
      expect(results).to.have.property('sameAs', 'http://myspace.com')
      expect(results).to.have.property('description', 'lorem')
    })
  })
})

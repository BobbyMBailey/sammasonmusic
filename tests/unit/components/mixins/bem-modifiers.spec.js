import { expect } from 'chai'
import {getModifiers} from '../../../../src/components/mixins/bem-modifiers'

describe('BEM Modifiers Mixin', () => {
  const bemMock = (value) => 'testing' + (value.length > 0 ? '__' + value : '')
  describe('getModifiers', () => {
    it('returns empty string', () => {
      expect(getModifiers({}, '')).to.eql('')
      expect(getModifiers({
        blockModifiers: [''],
        bem: bemMock
      }, '')).to.eql('')
    })

    it('returns modifiers as one string for block', () => {
      expect(getModifiers({
        blockModifiers: ['bigger', 'deep-darker'],
        bem: bemMock
      }, '')).to.eql('testing--bigger testing--deep-darker')
    })

    it('returns modifiers as one string for element', () => {
      expect(getModifiers({
        blockModifiers: ['bigger', 'deep-darker'],
        itemModifiers: ['small', 'light'],
        bem: bemMock
      }, 'item')).to.eql('testing__item--small testing__item--light')
    })
  })
})

import { expect } from 'chai'
import { createLocalVue, shallow } from '@vue/test-utils'
import ComponentUnderTest from '../../../src/components/Signup.vue'
import setupPlugins from './_setup/plugins'

describe('Signup', () => {
  let localVue
  const blockNamespace = 'mason'
  const componentName = 'signup'
  let stubs = {
    'mason-button': '<a/>',
    'mason-email-text-field': '<input/>'
  }

  before(() => {
    localVue = createLocalVue()
    setupPlugins(localVue)
  })

  describe('Accessibility', () => {
    it('provides anchor tag and input field', () => {
      const wrapper = shallow(ComponentUnderTest, {
        localVue,
        propsData: {
          items: [
            { label: '-' },
            { label: '-' }
          ]
        },
        stubs: stubs
      })

      expect(wrapper.contains('a')).equal(true)
      expect(wrapper.contains('input')).equal(true)
    })
  })

  describe('BEM', () => {
    it(`using namespace of ${blockNamespace}`, () => {
      const wrapper = shallow(ComponentUnderTest, {
        localVue,
        propsData: {
          items: [
            { label: '-', icon: [] },
            { label: '-', icon: [] }
          ]
        },
        stubs: stubs
      })
      expect(wrapper.contains(`.${blockNamespace}-${componentName}`)).equal(true, 'contains Block')
      expect(wrapper.contains(`.${blockNamespace}-${componentName}__submit`)).equal(true, 'contains submit button Element')
      expect(wrapper.contains(`.${blockNamespace}-${componentName}__email`)).equal(true, 'contains email text field Element')
    })
  })

  describe.skip('Properties', () => {})
})

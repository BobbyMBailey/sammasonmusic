import { expect } from 'chai'
import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import ComponentUnderTest from '../../../components/Contact.vue'
import setupPlugins from './_setup/plugins'

describe('Contact', () => {
  let localVue
  let blockNamespace = 'mason'
  let blockName = 'contact'
  let stubs = {
    'font-awesome-icon': '<div/>'
  }
  before(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    setupPlugins(localVue)
  })

  describe.skip('Accessibility', () => {})

  describe('BEM', () => {
    it(`using namespace of ${blockNamespace}`, () => {
      let store = new Vuex.Store({
        state: {
        }
      })
      const wrapper = shallow(ComponentUnderTest, {
        localVue,
        store,
        stubs: stubs
      })
      expect(wrapper.contains(`.${blockNamespace}-${blockName}`)).equal(true, 'contains Block')
      expect(wrapper.contains(`.${blockNamespace}-${blockName}__info`)).equal(true, 'contains Info Element')
      expect(wrapper.contains(`.${blockNamespace}-${blockName}__info_icon`)).equal(true, 'contains Info Icon Element')
      expect(wrapper.contains(`.${blockNamespace}-${blockName}__links`)).equal(true, 'contains Links Element')
    })
  })

  describe.skip('Properties', () => {})
})

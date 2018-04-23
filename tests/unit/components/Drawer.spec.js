import { expect } from 'chai'
import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import ComponentUnderTest from '../../../components/Drawer.vue'
import setupPlugins from './_setup/plugins'

describe('Drawer', () => {
  let localVue
  let blockNamespace = 'mdc'
  let stubs = {
    'font-awesome-icon': '<div/>'
  }
  before(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
    setupPlugins(localVue)
  })

  describe('Accessibility', () => {
    it('provides a list of li tags under a ul', () => {
      let store = new Vuex.Store({
        state: {
          headerNavigation: [{label: 'Home', link: '#'}, {label: 'About', link: 'about.html'}]
        }
      })

      const wrapper = shallow(ComponentUnderTest, {
        localVue,
        store,
        stubs: stubs
      })

      expect(wrapper.contains('ul')).equal(true)
      expect(wrapper.find('ul').findAll('li')).to.have.lengthOf(2)
    })
  })

  describe('BEM', () => {
    it(`using namespace of ${blockNamespace}`, () => {
      let store = new Vuex.Store({
        state: {
          headerNavigation: [{label: 'Home', link: '#'}]
        }
      })
      const wrapper = shallow(ComponentUnderTest, {
        localVue,
        store,
        stubs: stubs
      })
      expect(wrapper.contains(`.${blockNamespace}-drawer`)).equal(true, 'contains Block')
      expect(wrapper.contains(`.${blockNamespace}-drawer__drawer`)).equal(true, 'contains drawer Element')
      expect(wrapper.contains(`.${blockNamespace}-drawer__header`)).equal(true, 'contains header Element')
      expect(wrapper.contains(`.${blockNamespace}-drawer__toolbar-spacer`)).equal(true, 'contains spacer Element')
      expect(wrapper.contains(`.${blockNamespace}-drawer__content`)).equal(true, 'contains icon Element')
    })
  })

  describe.skip('Properties', () => {})
})

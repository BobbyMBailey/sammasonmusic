import { expect } from 'chai'
import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import ComponentUnderTest from '../../../src/components/Drawer.vue'
import setupPlugins from './_setup/plugins'
import setupRouter from './_setup/router'

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
          headerNavigation: [
            {label: 'Home', link: '#'},
            {label: 'About', link: 'about.html'}
          ]
        }
      })

      const wrapper = shallow(ComponentUnderTest, {
        localVue,
        router: setupRouter(localVue, ['about.html']).router,
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
        router: setupRouter(localVue),
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

  describe('Properties', () => {
    it('model property setting sets the value and emits event', () => {
      let store = new Vuex.Store({
        state: {}
      })
      const wrapper = shallow(ComponentUnderTest, {
        localVue,
        store,
        router: setupRouter(localVue),
        stubs: stubs
      })

      expect(wrapper.vm.model).to.equal(false)
      wrapper.vm.model = true
      expect(wrapper.emitted('change')).to.be.a('array')
      expect(wrapper.emitted('change')[0][0]).to.equal(true)
      // Changing of "open" is handled by events
      expect(wrapper.vm.model).to.equal(false)
    })

    describe('open', () => {
      it('defaults to false', () => {
        const wrapper = shallow(ComponentUnderTest, {
          localVue,
          store: new Vuex.Store({state: {}}),
          router: setupRouter(localVue),
          stubs: stubs
        })
        expect(wrapper.vm.open).to.equal(false)
      })
      it('setting to true changes MDC component state', () => {
        const wrapper = shallow(ComponentUnderTest, {
          localVue,
          store: new Vuex.Store({state: {}}),
          router: setupRouter(localVue),
          stubs: stubs
        })
        expect(wrapper.vm.mdcTemporaryDrawer.open).to.equal(false)
        wrapper.vm.open = true
        expect(wrapper.vm.mdcTemporaryDrawer.open).to.equal(true)
      })
    })
  })
})

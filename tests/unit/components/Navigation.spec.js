import { expect } from 'chai'
import { createLocalVue, shallow } from '@vue/test-utils'
import Navigation from '../../../components/Navigation.vue'
import setupPlugins from './_setup/plugins'

describe('Navigation', () => {
  let localVue
  let projectNamespace = 'mason'
  let stubs = {
    'font-awesome-icon': '<div/>'
  }
  before(() => {
    localVue = createLocalVue()
    setupPlugins(localVue)
  })

  describe('Accessibility', () => {
    it('provides a list of li tags under a ul', () => {
      const wrapper = shallow(Navigation, {
        localVue,
        propsData: {
          items: [
            { label: 'A' },
            { label: 'B' }
          ]
        },
        stubs: stubs
      })

      expect(wrapper.contains('ul')).equal(true)
      expect(wrapper.find('ul').findAll('li')).to.have.lengthOf(2)
    })
  })

  describe('BEM', () => {
    it(`using namespace of ${projectNamespace}`, () => {
      const wrapper = shallow(Navigation, {
        localVue,
        propsData: {
          items: [
            { label: 'A', icon: [] },
            { label: 'B', icon: [] }
          ]
        },
        stubs: stubs
      })
      expect(wrapper.contains(`.${projectNamespace}-navigation`)).equal(true, 'contains Block')
      expect(wrapper.contains(`.${projectNamespace}-navigation__list`)).equal(true, 'contains list Element')
      expect(wrapper.contains(`.${projectNamespace}-navigation__item`)).equal(true, 'contains item Element')
      expect(wrapper.contains(`.${projectNamespace}-navigation__link`)).equal(true, 'contains link Element')
      expect(wrapper.contains(`.${projectNamespace}-navigation__icon`)).equal(true, 'contains icon Element')
    })
  })

  describe('Properties', () => {
    it('renders label', () => {
      const wrapper = shallow(Navigation, {
        localVue,
        propsData: {
          items: [
            { label: 'Home' },
            { label: 'About' }
          ]
        },
        stubs: stubs
      })
      let list = wrapper.findAll(`.${projectNamespace}-navigation__item`)
      expect(list.at(0).text()).to.include('Home')
      expect(list.at(1).text()).to.include('About')
    })

    it('sets link', () => {
      const wrapper = shallow(Navigation, {
        localVue,
        propsData: {
          items: [
            { link: '#' },
            { link: 'home.html' }
          ]
        },
        stubs: stubs
      })
      let list = wrapper.findAll(`.${projectNamespace}-navigation__link`)
      let item = list.at(0)
      expect(item.attributes()).to.have.property('to', '#')
      item = list.at(1)
      expect(item.attributes()).to.have.property('to', 'home.html')
    })

    it('setting onlyIcon sets the aria-label but no text is displayed', () => {
      const wrapper = shallow(Navigation, {
        localVue,
        propsData: {
          items: [
            { label: 'Home' },
            { label: 'About', onlyIcon: false },
            { label: 'Social Network', onlyIcon: true }
          ]
        },
        stubs: stubs
      })
      let list = wrapper.findAll(`.${projectNamespace}-navigation__link`)
      expect(list.at(0).text()).to.include('Home')
      expect(list.at(1).text()).to.include('About')
      expect(list.at(2).text()).to.not.include('Social Network')
      expect(list.at(2).attributes()).to.have.property('aria-label', 'Social Network')
    })
  })
})

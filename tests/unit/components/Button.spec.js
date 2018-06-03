import { expect } from 'chai'
import { createLocalVue, shallow } from '@vue/test-utils'
import ComponentUnderTest from '../../../src/components/Button.vue'
import setupPlugins from './_setup/plugins'

describe('Button', () => {
  let localVue
  const blockNamespace = 'mason'
  const componentName = 'button'

  before(() => {
    localVue = createLocalVue()
    setupPlugins(localVue)
  })

  describe('Accessibility', () => {
    it('is button role', () => {
      // If it is a button element, then the role="button" is not required
      const wrapper = shallow(ComponentUnderTest, {
        localVue
      })

      expect(wrapper.is('button')).equal(true)
    })
  })

  describe('BEM', () => {
    it(`using namespace of ${blockNamespace}`, () => {
      const wrapper = shallow(ComponentUnderTest, {
        localVue
      })
      expect(wrapper.contains(`.${blockNamespace}-${componentName}`)).equal(true, 'contains Block')
    })
  })

  describe('Properties', () => {
    describe('type', () => {
      it('default is `button`', () => {
        let wrapper = shallow(ComponentUnderTest, {
          localVue
        })

        expect(wrapper.attributes().type).equal('button')
      })

      const allowedTypes = ['button', 'submit', 'reset']
      allowedTypes.forEach((type) => {
        it(`'${type}' allowed`, () => {
          let wrapper = shallow(ComponentUnderTest, {
            localVue,
            propsData: {
              type
            }
          })

          expect(wrapper.attributes().type).equal(type)
        })
      })

      it('anything besides allowed types results in warning and defaulting', () => {
        let wrapper = shallow(ComponentUnderTest, {
          localVue,
          propsData: {
            type: 'nope'
          }
        })

        expect(wrapper.attributes().type).equal('button')
      })
    })
  })

  describe('Events', () => {
    it('click dispatches event', () => {
      const wrapper = shallow(ComponentUnderTest, {
        localVue
      })
      wrapper.trigger('click')
      expect(wrapper.emitted('click')).to.have.lengthOf(1)
    })
  })
})

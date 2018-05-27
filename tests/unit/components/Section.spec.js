import { expect } from 'chai'
import { createLocalVue, shallow } from '@vue/test-utils'
import Section from '../../../src/components/Section.vue'
import setupPlugins from './_setup/plugins'

describe('Section', () => {
  let localVue
  before(() => {
    localVue = createLocalVue()
    setupPlugins(localVue)
  })

  it('renders props.title when provided', () => {
    const title = 'new message'
    const wrapper = shallow(Section, {
      localVue,
      propsData: { title }
    })
    expect(wrapper.text()).to.include(title)
  })
})

import { mount } from 'avoriaz'
import { expect } from 'chai'
import { createLocalVue } from '@vue/test-utils'
import EmailTextField from '../../../src/components/EmailTextField.vue'
import setupPlugins from './_setup/plugins'

describe('EmailTextField', () => {
  let vue
  before(() => {
    vue = createLocalVue()
    setupPlugins(vue)
  })
  it('id is generated', () => {
    const instance = mount(EmailTextField)
    let input = instance.find('input')[0]
    let result = input.getAttribute('id')
    expect(result).to.be.a('string')
    expect(result).to.include('EmailTextField')
    expect(result).to.have.lengthOf.above(15)
  })
})

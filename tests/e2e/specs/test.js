// https://docs.cypress.io/api/introduction/api.html

describe('Sam Mason Music', () => {
  describe('Style Guide', () => {
    it('no robot indexing', () => {
      cy.visit('/styleguide')
      cy.document().its('head').get('meta[content="noindex"][name="robots"]').should('to.have.length', 1)
    })
  })
  describe('Home Page', () => {
    it('allows robot indexing', () => {
      cy.visit('/')
      cy.document().its('head').get('meta[content="noindex"][name="robots"]').should('to.have.length', 0)
    })
    it('has header, footer, main, and aside', () => {
      cy.visit('/')
      cy.document().get('body').get('header').should('to.have.length', 2) // There are two headers due to the Drawer (aside)
      cy.document().get('body').get('footer').should('to.have.length', 1)
      cy.document().get('body').get('main').should('to.have.length', 1)
      cy.document().get('body').get('aside').should('to.have.length', 1)
    })
  })
})

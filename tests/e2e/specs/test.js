// https://docs.cypress.io/api/introduction/api.html

describe('PreLaunch', () => {
  it('no robot indexing', () => {
    cy.visit('/v2')
    cy.document().its('head').get('meta[content="noindex"][name="robots"]').should('to.have.length', 1)
    cy.visit('/v2/styleguide')
    cy.document().its('head').get('meta[content="noindex"][name="robots"]').should('to.have.length', 1)
  })
})

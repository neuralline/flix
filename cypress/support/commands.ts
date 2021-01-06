Cypress.Commands.add('getById', id => {
  cy.get(`[data-test=${id}]`)
})

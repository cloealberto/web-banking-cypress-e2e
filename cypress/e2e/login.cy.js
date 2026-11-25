describe('Login', () => {
  it('Login com dados válidos deve permitir o acesso ao dashboard', () => {

    cy.visit('http://localhost:4000')

    cy.get('#username').click().type('cloe.alberto')
    cy.get('#senha').click().type('101010')
    cy.get('#login-section > .btn').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')



  })
})
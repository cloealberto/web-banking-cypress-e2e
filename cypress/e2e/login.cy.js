describe('Login', () => {
  it('Login com dados válidos deve permitir o acesso ao dashboard', () => {

    cy.visit('http://localhost:4000')

    cy.get('#username').click().type('cloe.alberto')
    cy.get('#senha').click().type('101010')
    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Realizar Transferência').should('be.visible')



  })

  it('Login com dados inválidos deve mostrar mensagem de erro', () => {

    cy.visit('http://localhost:4000')

    cy.get('#username').click().type('cloe.alberto')
    cy.get('#senha').click().type('121010')
    cy.contains('button', 'Entrar').click()

    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')



  })
})
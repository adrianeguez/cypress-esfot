describe('Mi primera prueba', () => { // Mocha

    it('Verdadero es verdadero!', () => { // Mocha

      expect(true).to.equal(true) // Chai

    })

    it('Visitar pagina ejemplo', () => { // Mocha

        cy.visit('https://example.cypress.io')
        // cy.contains('amigo')
        // cy.contains('Commands')
        cy.contains('type')
        .click()

        // url contiene commands/actions

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
        .type('escuela@politecnica.com')
        .should('have.value', 'escuela@politecnica.com')

      })

  })
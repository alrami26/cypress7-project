Cypress.Commands.add('verifyHeaderImage', () => {
    cy.get('[src=\'\/images\/Toolsqa\.jpg\']').should('be.visible');
});

Cypress.Commands.add('verifyHeaderSection', () => {
    cy.get('header').should('be.visible');
});

Cypress.Commands.add('verifyMainHeader', () => {
    cy.get('.main-header').contains("Book Store").should('be.visible');
});


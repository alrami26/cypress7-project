const accordionLocation = '.left-pannel .accordion ';

Cypress.Commands.add('verifyLeftPanelAccordion', () => {
    cy.get(accordionLocation).should('be.visible');
});

Cypress.Commands.add('verifyLeftPanelAccordionElements', () => {
    cy.get(accordionLocation + '.element-group')
    .should('have.length', 6)
    .each(($el) => {
        expect(cy.wrap($el).get('.header-text')).not.to.be.empty;
        cy.wrap($el).get('.header-text').should('be.visible');
        cy.wrap($el).get('.header-text .pr-1').should('be.visible');
        cy.wrap($el).get('.header-right .separator').should('be.visible');
        cy.wrap($el).get('.header-right .icon').should('be.visible');
        cy.wrap($el).should('be.visible');
    });
});
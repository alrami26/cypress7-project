const table = '.rt-table ';

Cypress.Commands.add('verifyBookTable', () => {
    cy.get(table).should('be.visible');
});

Cypress.Commands.add('verifyBookTableHeader', () => {
    cy.get(table + '.rt-resizable-header')
    .should('have.length', 4)
    .each(($el) => {
        expect(cy.wrap($el).children('.rt-resizable-header-content')).not.to.be.empty;
        cy.wrap($el).children('.rt-resizable-header-content').should('be.visible');
        cy.wrap($el).should('be.visible');
    });
});

Cypress.Commands.add('verifyBookTableElement', (numberRows = '5') => {
    cy.get(table + '.rt-tr-group .rt-tr')
    .should('have.length', numberRows)
    .each(($el) => {
        cy.get($el).within(() => {
            cy.get('img').should('be.visible');
            cy.get('span').should('be.visible');
            cy.get('a').should('have.attr', 'href');
            cy.get('.rt-td').eq(2).should('be.visible');
            expect(cy.get('.rt-td').eq(2)).not.to.be.empty;
            cy.get('.rt-td').eq(3).should('be.visible');
            expect(cy.get('.rt-td').eq(3)).not.to.be.empty;
        }) 
    });
});

Cypress.Commands.add('rowsPerPage', (numberRows = '5') => {
    cy.get('select').should('be.visible').select(numberRows);
});
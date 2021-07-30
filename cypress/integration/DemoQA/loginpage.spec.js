/// <reference types="cypress" />

const resolutions = [
    {width: 1440, height: 900},
    //{width: 768, height: 1024},
    //{width: 375, height: 667}
  ];

  resolutions.forEach(resolution => {
    describe(`Home Page suite displayed in ${resolution.width}x${resolution.height}`, () => {
        before(() => {
            cy.intercept('https://www.demoqa.com/BookStore/v1/Books').as('getBooks');
            cy.visit('/books');
            cy.wait('@getBooks').its('response.statusCode').should('eq', 200);
        })

        beforeEach(() => {
            cy.viewport(resolution.width, resolution.height);
        })
        
        context('API Login', () => {
            it('Login through API', () => {
                cy.fixture('user').then((juser) => {
                    cy.log(juser);
                    cy.login(juser);
                })
            });
        });

    });
});
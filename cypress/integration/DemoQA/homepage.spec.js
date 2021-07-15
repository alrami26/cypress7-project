/// <reference types="cypress" />

const resolutions = [
    {width: 1440, height: 900},
    {width: 768, height: 1024},
    {width: 375, height: 667}
  ];

  resolutions.forEach(resolution => {
    describe(`Home Page suite displayed in ${resolution.width}x${resolution.height}`, () => {
        before(() => {
            cy.visit('/');
        })

        beforeEach(() => {
            cy.viewport(resolution.width, resolution.height);
        })

        context('Header Suite', () => {

            it('Verify Header Section', () => {
                cy.get('header').should('be.visible');
            })  
        
            it('Verify Tittle Image', () => {
                cy.get('[src=\'\/images\/Toolsqa\.jpg\']').should('be.visible');
            })

            it('Verify Main Header', () => {
                cy.get('.main-header').contains("Book Store").should('be.visible');
            });
        
        })

        context('Left Panel Suite', () => {

            it('Verify Left Panel Accordion', () => {
                cy.verifyLeftPanelAccordion();
            });

            it('Verify Left Panel Accordion Elements', () => {
                cy.verifyLeftPanelAccordionElements();
            });
        });

        context('Book Table Suite', () => {

            before(() => {
                cy.rowsPerPage();
            });

            it('Verify Book Table', () => {
                cy.verifyBookTable();
            });

            it('Verify Book Table Header', () => {
                cy.verifyBookTableHeader();
            });

            it.only('Verify Book Table Element', () => {
                cy.verifyBookTableElement();
            });
        });
    });
});

  
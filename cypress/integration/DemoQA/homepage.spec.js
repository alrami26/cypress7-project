/// <reference types="cypress" />

const resolutions = [
    {width: 1440, height: 900},
    {width: 768, height: 1024},
    {width: 375, height: 667}
  ];

  resolutions.forEach(resolution => {
    context(`with Home Page displayed in ${resolution.width}x${resolution.height}`, () => {
        describe('Header Suite', () => {
            before(() => {
                cy.visit('/');
            })

            beforeEach(() => {
                cy.viewport(resolution.width, resolution.height);
            })

            it('Verify Header Section', () => {
                cy.verifyHeaderSection();
            })  
        
            it('Verify Tittle Image', () => {
            cy.verifyHeaderImage();
            })

            it('Verify Main Header', () => {
                cy.verifyMainHeader();
            });
        
        })

        describe('Left Panel Suite', () => {
            beforeEach(() => {
                cy.viewport(resolution.width, resolution.height);
            })

            it('Verify Left Panel Accordion', () => {
                cy.verifyLeftPanelAccordion();
            });

            it('Verify Left Panel Accordion Elements', () => {
                cy.verifyLeftPanelAccordionElements();
            });
        });
    });
});

  
Cypress.Commands.add('login', (user) => {
    cy.request('POST', '/Account/v1/Login', { userName: user.userName, password: user.password })
    .then((response) => {
        cy.setCookie('token', response.body.token);
        cy.setCookie('userName', response.body.username);
        cy.setCookie('userID', response.body.userId);
        cy.setCookie('expires', response.body.expires);
        expect(response.status).to.eq(200);
    });
});
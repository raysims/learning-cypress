describe('Login with Fixtures Data', () => {
    it('GIVEN a user loads the homepage', () => {
        cy.visit('http://zero.webappsecurity.com');
    })

    it('WHEN a user clicks Sign In CTA', () => {
        cy.get('[id=signin_button]').click();
        cy.get('h3').should('contain', 'Log in to ZeroBank');
    })

    it('THEN the user logins', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            
        cy.get('[id=user_login]').type(username);
        cy.get('[id=user_password]').type(password);
        cy.contains('Sign in').click();
        })
    })
})
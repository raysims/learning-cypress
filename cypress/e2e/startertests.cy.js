describe('Header text is available', () => {
    it('Given you load the webpage', () => {
        cy.visit('https://example.cypress.io/', {timeout: 10000});
        cy.url().should('include', 'example.cypress.io');
    })

    it('Then we should see the header text', () => {
        cy.get('h1').contains('Kitchen Sink');
    })
})

describe('Book Count Matches Number of Displayed Books', () => {
    it('Given the user goes navigates to Books ToScrap', () => {
        cy.visit('https://books.toscrape.com/');
        cy.url().should('include', 'https://books.toscrape.com/');
    })

    it('When the user filters the book by category Classics', () => {
        cy.get('a').contains('Classics').click();
        cy.get('h1').contains('Classics');
    })

    it('Then the results count should equal displayed products', () => {
        
        cy.get('.product_pod').its('length').should('eq', 19);
    })
})
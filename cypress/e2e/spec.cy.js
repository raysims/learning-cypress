describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('My first test with cypress', () => {
    it('True should be True', () => {
        expect(true).to.equal(true);
    })

    it('False should be false', () => {
        expect(false).to.equal(false);
    })
})

describe('Simple test that fails', () => {
    it('Test Should Fail', () => {
        expect(true).to.equal(false);
    })
})
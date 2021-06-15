describe('Existing user buys a ticket', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
  })
  it('should log in successfully', ()=>{
    cy.visit('/')
    cy.get('a.login').click()
    cy.get('[cy=email]').click().type('admin1@email.com')
    cy.get('[cy=password]').click().type('admin1{enter}')
  })
  it('should enter proper flight data', ()=>{
    cy.get('[name="departure"]').click()
    cy.get('mat-option').contains('New York').click();
    cy.get('[name="arrival"]').click()
    cy.get('mat-option').contains('London').click();
    const date = new Date().toISOString().split("T")[0]
    cy.get('[name="date"]').click().type(date)
    cy.get('[name="class"]').click()
    cy.get('mat-option').contains('Premium').click();
    cy.get('[name="tickets"]').click()
    cy.get('mat-option').contains('2').click();
    cy.get('[type="submit"]').click()
  })
  it('should select preferences and seats', ()=>{
    cy.contains('Cabin').click()
    cy.contains('10kg').click()
    cy.contains('Priority').click()
    cy.contains('P4A').click()
    cy.contains('P4B').click()
    cy.contains('Confirm').click()
  })
  it('should display price and weather', ()=>{
    cy.contains('Your total').should('contain','2,320.00')
    cy.contains('current weather').should('contain','London')
  })
  it('should log the user out', ()=>{
    cy.get('a.login').click()
  })
})


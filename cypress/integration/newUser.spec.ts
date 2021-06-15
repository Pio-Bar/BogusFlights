describe('New user buys a ticket', () => {
    it('Visits the initial project page', () => {
      cy.visit('/')
    })
    it('should register successfully', ()=>{
      cy.visit('/')
      cy.get('a.login').click()
      cy.get('p.ng-star-inserted > a').click()
      cy.get('#mat-input-3').click().type('Jan')
      cy.get('#mat-input-4').click().type('Kowalski')
      cy.get('#mat-input-1').click().type('example@email.com')
      cy.get('#mat-input-2').click().type('example123')
      cy.get('#mat-input-5').click().type('example123{enter}')
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
    it('should display proper credentials', ()=>{
        cy.get('.details > :nth-child(2) > h2').should('contain','JAN KOWALSKI')    
      })
    it('should log the user out', ()=>{
      cy.get('a.login').click()
    })
  })
  
  
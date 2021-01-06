// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  //Do the number buttons update the display of the running total?
  it('the number buttons should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '26')
  })

  // Do the arithmetical operations update the display with the result of the operation?
  it('arithmetical operations should update the display with the result of the operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8')
  })
  
  // Can multiple operations be chained together?
  it('should chain multiple operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator_subtract').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
  })

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('the output should be as expected - positive', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '8')
  })

  it('the output should be as expected - negative', () => {
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('the output should be as expected - decimals', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.6666666666666666')
  })

  it('the output should be as expected - very large number', () => {
    cy.get('#number9').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number9').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '10046912')
  })

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
  it('should return Error when divided by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Error')
  })
})

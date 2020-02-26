// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('BRAND')
  })
})

describe('Open the bag ', () => {
  it('Click on the bag icon', () => {
    cy.get('.header-bag__count').trigger('click')
  })

  it('should view the bag', () => {
    cy.get('.bag__mini-cart.cartItems').should('be.visible')
  })
})

describe('Add a product to the bag ', () => {
  it('Click on the Add button on a product', () => {
    cy.get('.product__add-to-cart').eq(1).trigger('click')
  })

  it('should have the product in the bag', () => {
    cy.get('.bag__mini-cart.cartItems .bag__mini-cart__item').should('have.length', 2)
  })
})

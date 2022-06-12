/// <reference types="cypress" />

export function addToCart() {
    cy.contains('HTC One M9')
        .click()
    cy.contains('Add to cart')
        .click()
    cy.contains('Cart')
        .click()
    cy.contains('HTC One M9')
        .should('be.visible')
    cy.contains('Place Order')
        .click()
    cy.contains('Place order')
        .should('be.visible')
}

export function fillForm() {
    cy.get('[id="name"]') // fill form
        .click()
        .type('Leon')
    cy.get('[id="country"]')
        .type('Hrvatska')
    cy.get('[id="city"]')
        .type('Rijeka')
    cy.get('[id="card"]')
        .type('56564534432312')
    cy.get('[id="month"]')
        .type('6')
    cy.get('[id="year"]')
        .click()
        .type('2022')
    cy.contains('Purchase')
        .click()
    cy.contains('Thank you for your purchase!')
        .should('be.visible')
        .wait(1000)
    cy.contains('OK')
        .click()
}
/// <reference types="cypress" />

export function verifyTabTitle() {
    cy.title()
        .should('eq', 'STORE')
}

export function categoryCheck() {
    cy.contains('Phones')
        .should('be.visible')
        .click()
    cy.contains('Laptops')
        .should('be.visible')
        .click()
    cy.contains('Monitors')
        .should('be.visible')
        .click()
}
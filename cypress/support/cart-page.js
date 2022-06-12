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
    cy.fixture('order-data').then(orderData => {
        const {
            name,
            country,
            city,
            card,
            month,
            year,
        } = orderData;

        cy.get('[id="name"]') // fill form
            .click()
            .type(name)
        cy.get('[id="country"]')
            .type(country)
        cy.get('[id="city"]')
            .type(city)
        cy.get('[id="card"]')
            .type(card)
        cy.get('[id="month"]')
            .type(month)
        cy.get('[id="year"]')
            .click()
            .type(year)
        cy.contains('Purchase')
            .click()
        cy.contains('Thank you for your purchase!')
            .should('be.visible')
            .wait(1000)
        cy.contains('OK')
            .click()
    });
}
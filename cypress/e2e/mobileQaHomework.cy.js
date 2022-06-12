import {
    verifyTabTitle,
    categoryCheck,
} from '../support/main-page'

import {
    addToCart, fillForm,
} from '../support/cart-page'

describe('Should purchase a single item', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.viewport(414, 896)
        cy.viewport('iphone-xr')
    })

    it('should validate the tab title', () => {
        verifyTabTitle()
    })


    it('should be able to click on categories', () => {
        categoryCheck()
    })

    it('should be able to add item to the cart and purchase it', () => {
        addToCart()
        fillForm()
    })

})
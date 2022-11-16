/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })

it('My FirstTest case',function() {

    cy.visit("https://www.fravega.com/");

    cy.get('#header-geo-location-form-postal-number').type(this.data.cp)
    cy.get('.sc-fxNMLY > .sc-ksXiFW').click()
  
    cy.get('[style="grid-area:search"] > .sc-dkIXZx > .sc-dFJtaz').type(this.data.busqueda)
    cy.get('[style="grid-area:search"] > .sc-dkIXZx > .sc-ikPAEB').click()

    // Elegir el producto
    cy.get('[data-test-id="result-item"]').each(($el,index,$list)=>{
        let tv = $el.text()
        if(tv.includes(this.data.nombreProd)){
            cy.wrap($el).click()      
        }
    })
    
    //Pantalla del producto

    //Click en comprar

    cy.get('[data-test-id="product-buy-button"]').eq(1).click()
    cy.get('.item-remove').eq(1).click()

    cy.get('.empty-cart-title').should('have.text', 'Su carrito está vacio').and('be.visible')
    cy.get('.empty-cart-message > p').should('have.text', 'Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.').and('be.visible')

    //Volver a elegir productos

    cy.get('#cart-choose-products').click()
})

})


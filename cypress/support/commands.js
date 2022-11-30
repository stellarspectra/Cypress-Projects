// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
        })


})

Cypress.Commands.add("LoginAPI", ()=>{

    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {"userEmail":"rahulshetty@gmail.com","userPassword":"Iamking@00"}).then(function(response){

        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token);
        
    })

})

Cypress.Commands.add("comprarProducto", (producto,idproducto)=>{

    
   
    cy.wait(5000)
    cy.get('[style="grid-area:search"] > .sc-dkIXZx > .sc-dFJtaz').type(producto)
    cy.get('[style="grid-area:search"] > .sc-dkIXZx > .sc-ikPAEB').click()

    cy.wait(5000)
    cy.get('[data-test-id="result-item"]').each(($el,index,$list)=>{
        let tv = $el.text()
        if(tv.includes(idproducto)){
            cy.wrap($el).click()      
        }
    })
    cy.wait(5000)
    cy.get('[data-test-id="product-buy-button"]').eq(1).click()
    cy.wait(26000)
    cy.get('.item-remove').eq(1).click()
    cy.wait(5000)
    cy.get('.empty-cart-title').should('have.text', 'Su carrito está vacio').and('be.visible')
    cy.get('.empty-cart-message > p').should('have.text', 'Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.').and('be.visible')
    cy.wait(2000)
    //Volver a elegir productos

    cy.get('#cart-choose-products').click()

})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{


  beforeEach(function() {
    
    cy.visit("https://www.fravega.com/");

    cy.get('#header-geo-location-form-postal-number').type('1824')
    cy.get('.sc-fxNMLY > .sc-ksXiFW').click()
  })



it('1° producto',function() {

  cy.comprarProducto('Televisor 4k', 'Smart TV 55” QLED 4K Samsung QN55Q65BAGCF')

})

it('2° producto',function() {

  cy.comprarProducto('freidora', 'Freidora de Aire Airfryer Philips HD9218/60')

})

it('3° producto',function() {

  cy.comprarProducto('Celular', 'Celular Samsung Galaxy A33 128GB Negro')

})

})





























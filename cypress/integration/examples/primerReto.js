/// <reference types="Cypress" />

require('cypress-xpath');
describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {

    cy.visit("https://computer-database.gatling.io/computers");
    cy.title().should('eq',"Computers database")

    cy.get('#searchbox').type('ASUS Eee PC 901')
    cy.get('#searchsubmit').click()
    cy.xpath("/html//section[@id='main']/table[@class='computers zebra-striped']//a[@href='/computers/301']").click()

})

})


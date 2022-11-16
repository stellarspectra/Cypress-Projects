/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {

    cy.LoginAPI().then(function(){
        cy.visit("https://rahulshettyacademy.com/client", {
            onBeforeLoad : function(window){
                window.localStorage.setItem('token',Cypress.env('token'))
            }
        })
    })


})

})






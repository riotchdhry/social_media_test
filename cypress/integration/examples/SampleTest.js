/// <reference types="Cypress"/>

import LoginPage from '../../support/pageObjects/LoginPage'

describe('This is the Test Framework_ End to End Sign up Flow.', function(){
    beforeEach(function(){

        cy.fixture('test_data').then(function(data){
            this.data = data
        })
    })

    const loginpage = new LoginPage();

    it('Test_02:: Signing-in new user', function(){
        
        cy.visit(Cypress.env('url'));
        loginpage.getEmail().type(this.data.email)
        loginpage.getPass().type(this.data.password)
        loginpage.getLogin().click()
    })

    it('Test_06 :: Post from profiles page', function(){
        cy.visit(Cypress.env('url1'));
        cy.url().then( urlValue => cy.visit(urlValue + this.data.handle));
        ;
        cy.wait(10000);
    })

})
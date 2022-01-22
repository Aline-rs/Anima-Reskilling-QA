/// <reference types = "cypress" />

import PaginaInicial from "./Modulos/modulos.js"

before(() => {
    cy.visit("https://www.saucedemo.com/");
})
beforeEach(() => {
    cy.reload();
    cy.get('[data-test="username"]').clear;
    cy.get('[data-test="password"]').clear;
})

describe.skip("testes", () => {


it.skip("primeiro acesso a um site e comparação do título", () => {
    cy.title().should("to.be.equal", "Swag Labs").and("contain", "Swag");

})

it("interação com elementos", () => {
   //cy.get('[data-test="login-button"]').click();
   //cy.get('[data-test="error"]').should("contain", "Username is required").reload();
   cy.get('[data-test="username"]').type("teste{selectall}", {delay: 1000})
   cy.get('[data-test="password"]').type("123456")
   cy.get('[data-test="login-button"]').click();
})

it.only("segunda interação",() => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click();
    //cy.get('.title').should("contain", "Products");
})

})
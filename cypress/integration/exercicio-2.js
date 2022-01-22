/// <reference types = "cypress" />

import PaginaInicial from "./Modulos/modulos.js"

describe("testes2", () => {

    it.only("exercicio 2", () =>{
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should("contain", "Products"); 
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should("contain", "Sauce Labs Backpack");  
    })
}) 
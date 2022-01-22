/// <reference types = "cypress" />

import {PaginaInicial, PaginaProdutos} from "./Modulos/modulos.js"


/* beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
}) */

describe("Teste - Percurso válido", () => {

    const login = new PaginaInicial();
    const produtos = new PaginaProdutos();

    it("Percurso: Login, carrinho, finalização da compra e validações", () =>{

        //Realizando login
        login.acessoSite()
        login.caixaUsername().type("standard_user");
        login.caixaSenha().type("secret_sauce");
        login.botaoLogin().click();

        // Validação de login 

        produtos.tituloVerificacao().should("contain","Products"); 
        
        //Adicionando ao carrinho

        produtos.adicionarCarrinho().click();
        produtos.carrinhoVerificacao().click();

        // Validação carrinho

        cy.get('.cart_item').should("contain", "Sauce Labs Backpack");  

        // Preenchendo formulário e validando 

        var precoA = cy.get('.inventory_item_price');
        cy.get('[data-test="checkout"]').click(); 
        cy.get('.title').should("contain", "Checkout");
        cy.get('[data-test="firstName"]').type("Aline");
        cy.get('[data-test="lastName"]').type("Rosa");
        cy.get('[data-test="postalCode"]').type("55555555");
        cy.get('[data-test="continue"]').click();
    
        // Validando tela de compra
        
        cy.get('.title').should("contain", "Checkout: Overview");

        // Validando preço

        var precoB = cy.get('.summary_subtotal_label');
        precoA = precoB;

        // Validando tela final

        cy.get('[data-test="finish"]').click(); 
        cy.get('.complete-header').should("contain", "THANK YOU FOR YOUR ORDER");
    })

    it.skip("Login e adicionar e remover do carrinho", () =>{

        //login
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        //Adicionando e removendo do carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should("contain", "Sauce Labs Backpack");  
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="continue-shopping"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').should("contain", "Sauce Labs Bike Light"); 
    }) 
}) 
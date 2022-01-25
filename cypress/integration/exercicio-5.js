/// <reference types = "cypress" />

import {PaginaInicial, PaginaProdutos, PaginaCarrinho, PaginaFormulario, PaginaCompra, PaginaFinal} from "./Modulos/modulos.js"


beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
})

describe("Teste - Percurso válido", () => {

    const login = new PaginaInicial();
    const produtos = new PaginaProdutos();
    const carrinho = new PaginaCarrinho();
    const formulario = new PaginaFormulario();
    const compra = new PaginaCompra();
    const final = new PaginaFinal();

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

        carrinho.validacaoCarrinho().should("contain", "Sauce Labs Backpack");  

        // Preenchendo formulário e validando 

        var precoA = cy.get('.inventory_item_price');
        carrinho.botaoCheckout().click(); 
        formulario.verificacaoCheckout().should("contain", "Checkout");
        formulario.caixaFirstName().type("Aline");
        formulario.caixaLastName().type("Rosa");
        formulario.caixaPostalCode().type("55555555");
        formulario.botaoContinue().click();
    
        // Validando tela de compra
        
        compra.validacaoCompra().should("contain", "Checkout: Overview");

        // Validando preço

        var precoB = cy.get('.summary_subtotal_label');
        precoA = precoB;

        // Validando tela final

        compra.botaoFinish().click(); 
        final.validacaoFinal().should("contain", "THANK YOU FOR YOUR ORDER");
    })

    it("Login e adicionar e remover do carrinho", () =>{

        //login
        login.caixaUsername().type("standard_user");
        login.caixaSenha().type("secret_sauce");
        login.botaoLogin().click();

        //Adicionando e removendo do carrinho
        produtos.adicionarCarrinho().click();
        produtos.carrinhoVerificacao().click();
        carrinho.validacaoCarrinho().should("contain", "Sauce Labs Backpack");  
        carrinho.removerCarrinho().click();
        carrinho.retornarProdutos().click();
        carrinho.adicionarOutroItem().click();
        produtos.carrinhoVerificacao().click();
        carrinho.validacaoCarrinho().should("contain", "Sauce Labs Bike Light"); 
    }) 
}) 
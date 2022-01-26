/// <reference types = "cypress" />

import PaginaInicial from "./Modulos/Classes-Exercicio-5/classPagInicial.js"
import PaginaProdutos from "./Modulos/Classes-Exercicio-5/classPagProduto"
import PaginaCarrinho from "./Modulos/Classes-Exercicio-5/classPagCarrinho"
import PaginaCompra from "./Modulos/Classes-Exercicio-5/classPagCompra"
import PaginaFormulario from "./Modulos/Classes-Exercicio-5/classPagFormulario"
import PaginaFinal from "./Modulos/Classes-Exercicio-5/classPagFinal"


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
        login.Login("standard_user", "secret_sauce");

        // Validação de login e adicionando ao carrinho

        produtos.tituloVerificacao().should("contain","Products"); 
        produtos.Produtos();

        // Validação carrinho

        carrinho.validacaoCarrinho().should("contain", "Sauce Labs Backpack");  
        carrinho.processCarrinho();

        // Preenchendo formulário e validando 
        
        formulario.verificacaoCheckout().should("contain", "Checkout");
        formulario.processFormulario("Aline", "Rosa", "5555555")
    
        // Validando tela de compra
        
        compra.validacaoCompra().should("contain", "Checkout: Overview");
        compra.finalizarCompra()
        // Validando tela final

        
        final.validacaoFinal().should("contain", "THANK YOU FOR YOUR ORDER");
    })
 /* 
    it.skip("Login e adicionar e remover do carrinho", () =>{

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
}) */
})
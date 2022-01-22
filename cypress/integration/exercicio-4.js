import PaginaInicial from "./Modulos/modulos.js"

describe("exer. 4 - login com vários usuários", () =>{
    before(() => {
        cy.visit("https://www.saucedemo.com/");
    })

    it("login: standart_user", () =>{
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should("contain", "Products");
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        

    })

    it("login: locked_out_user", () =>{
        cy.get('[data-test="username"]').type("locked_out_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should("contain", "Sorry, this user has been locked out");
        cy.reload(); //usar o cy.reaload para recarregar a página e limpar os campos do formulário para testar o próx. usuário.

    })

    it("login: problem_user", () =>{
        cy.get('[data-test="username"]').type("problem_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should("contain", "Products");
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    })

    it("login: performance_glitch_user", () =>{
        cy.get('[data-test="username"]').type("performance_glitch_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should("contain", "Products");
    })
})
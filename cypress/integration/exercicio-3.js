/// <reference types = "cypress" />

before(() => {
    cy.visit("https://www.google.com.br");
})

describe("exercicio 3", ()=> {
    it.only("pesquisando no google", () =>{
        cy.get('.gLFyf').type("Frigideira suja {enter}");
        cy.title().should("contain", "Frigideira suja - Pesquisa Google")
    })

})
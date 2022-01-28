/// <reference types="cypress" />

var cep;
//cep = window.prompt("Digite o CEP")
describe("Teste api dos correios", () => {
    it.skip("Metodo GET", () => {
        cep = window.prompt("Digite o CEP")
        cy.request({
            method: "GET",
            url: "https://viacep.com.br/ws/"+cep+"/json/"
        }).then(response => console.log(response))
    })
    it("Criar usuário (POST)", () => {
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/user",
            body: {
                "id": 1,
                "username": "henrique",
                "firstNName": "Henrique",
                "lastName": "de Bem",
                "email": "henrique@gmail.com",
                "password":"henrique123",
                "phone": "987654321",
                "userStatus": 0

                  }
          })
    })
    it("Verificar se o user foi criado", () => {
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/henrique"
        }) 
    })
    it("Fazer login", () => {
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/login",
            body: {
                "username": "henrique",
                "password":"henrique123"
            }
        })
    })
    it("Fazer logout", () => {
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/user/logout",
        })
    })
})




/*fazer logout*/
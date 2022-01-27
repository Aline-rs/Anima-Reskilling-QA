describe("Teste com API", () => {
    var cep = "30840110"
    it("Metodo GET", () =>{
        cy.request({
            method: "GET",
            url: `https://viacep.com.br/ws/${cep}/json/`
        })
                .then(response => console.write(response) )
    })

})
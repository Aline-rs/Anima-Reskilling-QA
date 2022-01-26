/// <reference types = "cypress" />

import PaginaPrincipal from "./Modulos/Classes-Exercicio-6/classPagPrincipal"

describe("Exercicio 6", () => {

    const pagPrinc = new PaginaPrincipal;

    it("Testando o site da Amazon", () =>{

        //Entrando no site, buscando produto e viajando para a página do mesmo.
        pagPrinc.URL();
        pagPrinc.busca("teclado mecanico");
        pagPrinc.validarBusca().should("contain", "teclado mecanico")
        pagPrinc.selecionarProduto();

        //
    })
})



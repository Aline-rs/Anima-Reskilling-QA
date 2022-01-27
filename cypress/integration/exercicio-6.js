/// <reference types = "cypress" />

import PaginaPrincipal from "./Modulos/Classes-Exercicio-6/classPagPrincipal"
import PaginaItem from "./Modulos/Classes-Exercicio-6/classPagProduto"
describe("Exercicio 6", () => {

    const pagPrinc = new PaginaPrincipal;
    const pagProduc = new PaginaItem;

    it("Testando o site da Loja Castor", () =>{

        //Entrando no site, buscando produto e viajando para a página do mesmo.
        pagPrinc.URL();
        pagPrinc.busca();
        pagPrinc.selecionarProduto();

        //Adicionando dois itens no carrinho e finalizando compra.
        pagProduc.adicionarItem();
        pagProduc.adicionarItem2();
        pagProduc.finalizandoCompra();
    })
})



class PaginaPrincipal{

    URL(){
        return cy.visit("https://lojacastor.com.br");
    }

    busca(s){
        cy.get('#menumanager-menu-1 > .top-menu > .menumanager-menu-primary > [rel="j1_7"] > .first-level').click({force:true});;
        cy.get('#menumanager-menu-1 > .top-menu > .menumanager-menu-primary > [rel="j1_7"] > .first-level > .title').click({force:true});;
    }
    selecionarProduto(){
        cy.get('#product-item-info_6074 > .details > .name > .product-item-link').click({force:true});
    }

}

export default PaginaPrincipal;
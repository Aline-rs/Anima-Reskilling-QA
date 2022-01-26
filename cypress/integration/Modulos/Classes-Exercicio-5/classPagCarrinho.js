class PaginaCarrinho{

    validacaoCarrinho(){
        return cy.get('.inventory_item_name');
    }
    processCarrinho(){
        cy.get('[data-test="checkout"]').click();

    }
/* 
    removerCarrinho(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }
    retornarProdutos(){
        return cy.get('[data-test="continue-shopping"]');
    }

    adicionarOutroItem(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    } */
}

export default PaginaCarrinho;
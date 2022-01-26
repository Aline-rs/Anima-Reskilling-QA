class PaginaProdutos{

    tituloVerificacao(){
       return cy.get('.title');
    }
    
    Produtos(){
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
    }
}

export default PaginaProdutos;
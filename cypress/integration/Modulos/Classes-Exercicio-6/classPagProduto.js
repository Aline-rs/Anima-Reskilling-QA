class PaginaItem{

    adicionarItem(){
        cy.get('#product-addtocart-button > span').click({force:true});
    }

    adicionarItem2(){
        cy.get('.methods > :nth-child(2) > .action').click({force:true});
        cy.get('#slick-slide20 > :nth-child(1) > .item > #product-item-info_3604 > .details > .name > .product-item-link').click({force:true});
        cy.get('#product-addtocart-button > span').click({force:true});
    }

    finalizandoCompra(){
        cy.get('.methods > :nth-child(3) > .action').click({force:true});
    }

}

export default PaginaItem;
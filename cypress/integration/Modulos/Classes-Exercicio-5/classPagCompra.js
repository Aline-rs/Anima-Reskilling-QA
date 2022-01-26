class PaginaCompra{

    validacaoCompra(){
        return cy.get('.title');
    }

    finalizarCompra(){
        cy.get('[data-test="finish"]').click();
    }
}

export default PaginaCompra;
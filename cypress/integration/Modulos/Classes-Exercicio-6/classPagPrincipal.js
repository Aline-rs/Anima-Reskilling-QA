class PaginaPrincipal{

    URL(){
        return cy.visit("https://www.amazon.com.br");
    }

    busca(search){
        cy.get('#twotabsearchtextbox').type(search);
        cy.get('#nav-search-submit-button').click();
    }

    validarBusca(){
        return cy.get('.a-color-state');
    }

    selecionarProduto(){
        cy.get('[data-asin="B07D5S54C6"] > .sg-col-inner > .celwidget > [data-component-type="s-impression-logger"] > .s-featured-result-item > .s-include-content-margin > .a-spacing-medium > .rush-component > .a-link-normal > .a-section > .s-image').click();
    }

}

export default PaginaPrincipal;
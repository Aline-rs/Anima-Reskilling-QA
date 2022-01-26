class PaginaFormulario{

    verificacaoCheckout(){
        return cy.get('.title');
    }
    
    processFormulario(username, lastName, postalCode){
        cy.get('[data-test="firstName"]').type(username);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();

    }
}

export default PaginaFormulario;
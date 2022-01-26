class PaginaInicial{

    acessoSite(){
        return cy.visit("https://www.saucedemo.com/");
    }

    Login(usuario, senha){
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="password"]').type(senha);
        cy.get('[data-test="login-button"]').click();
    }
}

export default PaginaInicial;

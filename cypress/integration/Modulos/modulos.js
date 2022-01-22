export class PaginaInicial{

    caixaUsername(){
        return cy.get('[data-test="username"]');
    }

    caixaSenha(){
        return cy.get('[data-test="password"]');  
    }

    botaoLogin(){
        return cy.get('[data-test="login-button"]');
    }

    acessoSite(){
        return cy.visit("https://www.saucedemo.com/");
    }
}

export class PaginaProdutos{

    tituloVerificacao(){
        return cy.get('.title').should("contain", "Products"); 
    }

    adicionarCarrinho(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    carrinhoVerificacao(){
        return cy.get('.shopping_cart_link')
    }
}


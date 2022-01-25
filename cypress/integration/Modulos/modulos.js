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
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    carrinhoVerificacao(){
        return cy.get('.shopping_cart_link');
    }
}

export class PaginaCarrinho{

    validacaoCarrinho(){
        return cy.get('.cart_item');
    }

    botaoCheckout(){
        return cy.get('[data-test="checkout"]');
    }

    removerCarrinho(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]');
    }
    retornarProdutos(){
        return cy.get('[data-test="continue-shopping"]');
    }

    adicionarOutroItem(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    }
}

export class PaginaFormulario{

    verificacaoCheckout(){
        return cy.get('.title');
    }
    
    caixaFirstName(){
        return cy.get('[data-test="firstName"]');
    }

    caixaLastName(){
        return cy.get('[data-test="lastName"]');
    }

    caixaPostalCode(){
        return cy.get('[data-test="postalCode"]');
    }

    botaoContinue(){
        return cy.get('[data-test="continue"]')
    }
}

export class PaginaCompra{

    validacaoCompra(){
        return cy.get('.title');
    }

    botaoFinish(){
        return cy.get('[data-test="finish"]')
    }
}

export class PaginaFinal{

    validacaoFinal(){
        return cy.get('.complete-header');
    }
}
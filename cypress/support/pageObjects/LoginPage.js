class LoginPage{
    getEmail(){
        return cy.get(':nth-child(1) > .form-control');
    }

    getPass(){
        return cy.get(':nth-child(2) > .form-control');
    }

    getLogin(){
        return cy.get('.btn');
    }

    getGuestlogin(){
        return cy.get('button');
    }

    getSignup(){
        return cy.get('a')
    }
}

export default LoginPage;
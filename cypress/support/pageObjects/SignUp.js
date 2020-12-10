class SignUp{

    getName(){
        return cy.get(':nth-child(1) > .form-control');
    }

    getEmail(){
        return cy.get(':nth-child(2) > .form-control');
    }

    getPass(){
        return cy.get(':nth-child(3) > .form-control')
    }

    getConfirmPass(){
        return cy.get(':nth-child(4) > .form-control');
    }

    getRegister(){
        return cy.get('.btn');
    }

    getSignin(){
        return cy.get('a');
    }
}

export default SignUp;
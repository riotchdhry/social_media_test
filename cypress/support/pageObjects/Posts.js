class Posts{

    getThoughts(){
        return cy.get('.postForm_formContainer__3LPkn > .post-form > .card > .card-body > form > :nth-child(1) > .form-group > .form-control')
    }

    getPost(){
        return cy.get('form > .btn');
    }
}

export default Posts;
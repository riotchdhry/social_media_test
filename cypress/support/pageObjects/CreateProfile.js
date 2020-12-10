class CreateProfile{
    getHandle(){
        return cy.get(':nth-child(1) > .form-control');
    }

    getStatus(){
        return cy.get(':nth-child(2) > .form-control');
    }

    getEduYear(){
        return cy.get(':nth-child(3) > .form-control')
    }

    getSem(){
        return cy.get(':nth-child(4) > .form-control')

    }

    getSkill(){
        return cy.get(':nth-child(5) > .form-control')
    }

    getGit(){
        return cy.get(':nth-child(6) > .form-control')
    }
    
    getAbout(){
        return cy.get(':nth-child(7) > .form-control')
    }

    getAddSocial(){
        return cy.get('.createprof_socialbtn__1jXeQ')
    }

    getFb(){
        return cy.get(':nth-child(9) > :nth-child(1) > .form-control')
    }

    getInsta(){
        return cy.get(':nth-child(9) > :nth-child(2) > .form-control')

    }

    getLinkedin(){
        return cy.get(':nth-child(9) > :nth-child(3) > .form-control')
    }

    getYoutube(){
        return cy.get(':nth-child(9) > :nth-child(4) > .form-control')
    }

    getSubmit(){
        return cy.get('.btn')
    }


}

export default CreateProfile;
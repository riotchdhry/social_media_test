class AddEducation{
    getSchool(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getDegree(){
        return cy.get(':nth-child(2) > .form-control')
    }

    getSubject(){
        return cy.get(':nth-child(3) > .form-control')
    }
    getstartDate(){
        return cy.get(':nth-child(4) > .form-control')
    }
    getEndDate(){
        return cy.get(':nth-child(5) > .form-control')
    }
    getCurrentEdu(){
        return cy.get('#current')
    }
    getProgDescp(){
        return cy.get(':nth-child(7) > .form-control')
    }
    getSubmit(){
        return cy.get('.btn')
    }
    
}

export default AddEducation;
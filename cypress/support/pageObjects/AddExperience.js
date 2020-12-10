class AddExperience{
    
    getCompany(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getJobtitle(){
        return cy.get(':nth-child(2) > .form-control')
    }

    getLoc(){
        return cy.get(':nth-child(3) > .form-control')
    }

    getStartDate(){
        return cy.get(':nth-child(4) > .form-control')
    }

    getEndDate(){
        return cy.get(':nth-child(5) > .form-control')
    }
}

export default AddExperience;
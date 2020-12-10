class Dashboard{
    getCreateProf(){
        return cy.get('.btn')
    }

    getEditProf(){
        return cy.get('[href="/edit-profile"]')
    }

    getAddExp(){
        return cy.get('[href="/add-experience"]')
    }

    getAddEdu(){
        return cy.get('[href="/add-education"]')
    }

    getDeleteAcc(){
        return cy.get('.btn')
    }

    getJobDescp(){
        return cy.get(':nth-child(7) > .form-control')
    }

}

export default Dashboard;
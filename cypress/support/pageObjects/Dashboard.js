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

}

export default Dashboard;
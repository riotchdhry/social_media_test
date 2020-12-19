class NavBar{
    getPosts(){
        return cy.get('[href="/posts"]')
    }

    getProfile(){
        return 
    }

    getNotif(){
        return cy.get('[href="/notifications"]')
    }

    getLogout(){
        return cy.get('.navbar_logout__17yWs')
    }
}

export default NavBar;
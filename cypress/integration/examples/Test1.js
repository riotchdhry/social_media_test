/// <reference types="Cypress"/>
import LoginPage from '../../support/pageObjects/LoginPage'
import SignUp from '../../support/pageObjects/SignUp';
import Dashboard from '../../support/pageObjects/Dashboard';
import CreateProfile from '../../support/pageObjects/CreateProfile';
import AddExperience from '../../support/pageObjects/AddExperience'
import { add } from 'cypress/types/lodash';
//import { create } from 'cypress/types/lodash';

describe('This is the Test Framework_ End to End Sign up Flow.', function(){
    beforeEach(function(){

        cy.fixture('test_data').then(function(data){
            this.data = data
        })
    })
    const loginpage = new LoginPage();
    const signup = new SignUp();
    const dashboard = new Dashboard();
    const createprofile = new CreateProfile();
    const addexperience = new AddExperience();
    
    it('Test_01:: Sign-up new User', function(){
        cy.visit(Cypress.env('url'));
        loginpage.getSignup().click();
        signup.getName().type(this.data.name)
        signup.getEmail().type(this.data.email)
        signup.getPass().type(this.data.password)
        signup.getConfirmPass().type(this.data.cpassword)
        signup.getConfirmPass().should('have.value', this.data.password)        
        signup.getRegister().click()
        //cy.pause()
        cy.wait(6000)
    });

    it('Test_02:: Signing-in new user', function(){
        
        
        loginpage.getEmail().type(this.data.email)
        loginpage.getPass().type(this.data.password)
        loginpage.getLogin().click()
    });  
    it('Test_03:: Creating the new users profile', function(){
        cy.wait(6000)
        dashboard.getCreateProf().click()

        createprofile.getHandle().type(this.data.handle)
        createprofile.getStatus().select('Student')
        createprofile.getEduYear().type(this.data.year)
        createprofile.getSem().type(this.data.sem)
        createprofile.getSkill().type(this.data.skill)
        createprofile.getGit().type(this.data.git)
        createprofile.getAbout().type(this.data.about)
        createprofile.getAddSocial().click()
        createprofile.getFb().type(this.data.fb)
        createprofile.getInsta().type(this.data.insta)
        createprofile.getLinkedin().type(this.data.in)
        createprofile.getYoutube().type(this.data.youtube)
        createprofile.getSubmit().click();
        cy.wait(6000)
        cy.get('.dashboard_textcss__3ivcp > a').should('have.text', this.data.name)
    });

    it('Test_04:: Edit details of user::Add Experience', function(){
        dashboard.getAddExp().click()
        addexperience.getCompany().type()
        addexperience.getStartDate().click().type(this.data.expstart)
        addexperience.getEndDate().click().type(this.data.expend)\

    });
        
        

})

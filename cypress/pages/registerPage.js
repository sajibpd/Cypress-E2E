export class registerPage{

    Weblocatora={
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckBox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary'
    }
     
    openURL(){
        cy.visit(Cypress.env('URL'))
    }
    enterFirstName(FName){
        cy.get(this.Weblocatora.firstName).type(FName)
    }
    enterLastName(LName){
        cy.get(this.Weblocatora.lastName).type(LName)
    }
    enterEmail(email){
        cy.get(this.Weblocatora.email).type(email)
    }
    enterTelephone(telephone){
        cy.get(this.Weblocatora.telephone).type(telephone)
    }
    enterPassword(password){
        cy.get(this.Weblocatora.password).type(password)
        cy.get(this.Weblocatora.passwordConfirm).type(password)
    }
    selectCheckBox(){
        cy.get(this.Weblocatora.policyCheckBox).check()
    }
    clickOnContinue(){
        cy.get(this.Weblocatora.continue).click()
    }


}
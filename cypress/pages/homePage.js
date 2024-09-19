export class homePage{
    webLocators = {
        search_input: '.form-control.input-lg',
        click_search: '.btn.btn-default.btn-lg',
        product: 'img[title="Mackbook"]',
        addtocart: '[onclick^="cart.add"]', // Note: This might need to be a more specific selector if it's not unique
        SuccessMessages: '.alert'
    };

searchProduct(productName){
    cy.get(this.webLocators.search_input).type(productName)
    cy.get(this.webLocators.click_search).click()
}
verifyProductAvailability(){
    cy.get(this.webLocators.addtocart).first().should('be.visible')
}
addToCart(){
   // cy.get(this.webLocators.addtocart).first().click()
    cy.get(this.webLocators.addtocart).first().click()
}
verify() {
   
    return cy.get(this.webLocators.SuccessMessages);
  }
  
}
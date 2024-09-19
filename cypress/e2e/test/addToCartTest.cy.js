import { homePage, registerPage } from "../../pages/homePage"
import testData from '../../fixtures/testData.json'
const homePageObj= new homePage();


describe('test automation', ()=>{
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it('Add to cart flow',  () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.verifyProductAvailability()
        homePageObj.addToCart()
        homePageObj.verify().should('contain', testData.message.successMessage, {timtimeout: 10000}).and('contain', testData.product.productName);
        //.should('contain', testData.product.productName)
    });
})
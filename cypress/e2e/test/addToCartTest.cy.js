import { homePage, registerPage } from "../../pages/homePage"
import testData from '../../fixtures/testData.json'
const homePageObj= new homePage();


describe('test automation', ()=>{
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })

    it('Add to cart flow',  () => {
       // await new Promise(resolve => setTimeout(resolve, 2000))
        homePageObj.searchProduct(testData.product.productName)
       // await new Promise(resolve => setTimeout(resolve, 4000))
        homePageObj.verifyProductAvailability()
        homePageObj.addToCart()
       // await new Promise(resolve => setTimeout(resolve, 4000))
        
        homePageObj.verify().should('contain', "Success: You have added MacBook to your shopping cart!", {timtimeout: 10000});
        //.should('contain', testData.product.productName)
    });
})
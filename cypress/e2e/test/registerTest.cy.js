import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'



const registerObj = new registerPage()
const random = Math.floor(Math.random * 1000)
describe('test automation', ()=>{



    // it('Validing the valid registration flow', ()=>{
    //   registerObj.openURL()
    //   registerObj.enterFirstName(registerData.firstName)
    //   registerObj.enterLastName(registerData.lastName)
    //   registerObj.enterEmail(registerData.email)
    //   registerObj.enterTelephone(registerData.telephone)
    //   registerObj.enterPassword(registerData.password)
    //   registerObj.selectCheckBox()
    //   registerObj.clickOnContinue()

    // })
    it('Validing the invalid registration flow', ()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(`test.qa${random}@yopmail.com`)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckBox()
        registerObj.clickOnContinue()
  
      })


})
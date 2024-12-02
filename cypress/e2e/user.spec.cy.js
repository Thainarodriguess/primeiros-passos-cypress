import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericComboBox: ".oxd-select-text--arrow",
    secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    submitButton:".orangehrm-left-space"
  }


  it.only('User Info Update - Sucess', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
      dashboardPage.checkDashboardPage()
      menuPage.accessMyInfo()

    cy.get(selectorsList.firstNameField).type('FirstNameTest')
    cy.get(selectorsList.lastNameField).type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('driversLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get("body").should("contain", "Successfully Update")
    cy.get(".oxd-toast-close")
    cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({force: true})
    cy.get(selectorsList.thirdItemComboBox).click()
    
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
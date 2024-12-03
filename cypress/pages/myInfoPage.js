class MyInfoPage{

    selectorsList() {
        const selectors = {
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

        return selectors
    }

    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
    
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, expiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    
    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get("body").should("contain", "Successfully Update")
        cy.get(".oxd-toast-close")
    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemComboBox).click()
    }


}

    


export default MyInfoPage
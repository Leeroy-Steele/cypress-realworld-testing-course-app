describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("tom1@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("tom1@aol.com")
    })

    it("Does not allow incorrect email",()=>{
        cy.getByData("email-input").type("xxx")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it.only("Does not allow existing users to subscribe",()=>{
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist")
        .contains("Error: john@example.com already exists. Please use a different email address.")
    })

  })
  



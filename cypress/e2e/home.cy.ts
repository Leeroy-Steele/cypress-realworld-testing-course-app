describe('home page', () => {

  //start URL here
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  // check text is correct
  context("Hero section",()=>{
    it('the h1 contains the correct text', () => {
      cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
  
    })
  
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
  
    })
  })

  //check if a page loads
  context("Courses Section",()=>{
    it("Course: Testing Your First Next.js Application",()=>{
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })

    it("Course: Testing Foundations",()=>{
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
    
    it.only("Course: Cypress Fundamentals",()=>{
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })

  })
})

describe("Blog Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display login page if user is not logged in", () => {
    cy.contains("Login with Google").should("be.visible");
  });

  it("should display the blog login page correctly", () => {
    cy.contains("5 Essential Exercises for a Full-Body Workout").should("be.visible");
    cy.contains("Read More Blogs by Logging In ...").should("be.visible");
  });


});

describe("Blog Dashboard Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should load blog posts after login", () => {
    cy.visit("/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haGFudGVzaGJweWF0aUBnbWFpbC5jb20iLCJpYXQiOjE3MzkyNjcyODcsImV4cCI6MTczOTI3MDg4N30.zlIwioetL306awu62GX1f_BnQJTC0H3w6f2DvyIUB0I");
    cy.wait(4000);
    cy.get('[data-test-id="blogCard3"]').should('be.visible')
  });
});

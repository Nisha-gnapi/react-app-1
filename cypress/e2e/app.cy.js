describe("My App", () => {
  it('should navigate to the home page', () => {
    cy.visit("http://localhost:5176/");
    cy.contains('Home Page').should('be.visible');
  });
});

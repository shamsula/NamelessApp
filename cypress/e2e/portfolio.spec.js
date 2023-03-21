describe("test portfolio page", () => {
  beforeEach(() => {
    cy.visit("/portfolio");
  });
  it("access animated content", () => {
    cy.getBySel("toggle-button").click();
    cy.getBySel("p5-wrapper").should("be.visible");
    cy.getBySel("toggle-button").click();
    cy.getBySel("p5-wrapper").should("not.exist");
  });
  it("back button returns to homepage", () => {
    cy.getBySel("styled-back").click();
    cy.getBySel("header-page").should("have.text", "Home");
  });
});

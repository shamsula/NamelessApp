describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders home content correctly", () => {
    cy.findByText(/Home/i).should("exist");
    cy.getBySel("body-home").should("exist");
  });
  it("featured story renders correctly", () => {
    cy.getBySel("story-container").should("exist");
  });
});

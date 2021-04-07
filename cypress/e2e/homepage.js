describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders home content correctly", () => {
    cy.findByText(/Home/i).should("exist");
    cy.get(".Home__Body-bvxj1u-0").should("exist");
  });
  it("navigate to bio", () => {
    // cy.get('[href="/bio"] > .Button__StyledButton-sc-1906yzf-0').click();
    cy.findByText(/auto-biography/i).click();
    cy.get(".Bio__TextContainer-bqqjlh-1");
  });
  it("navigate to portfolio", () => {
    cy.findByText(/portfolio/i).click();
    cy.get(".Portfolio__ImagesContainer-sc-1917ty8-0").should("exist");
  });
});

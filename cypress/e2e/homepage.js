describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("renders container correctly", () => {
    cy.get(".Home__Body-bvxj1u-0").should("exist");
  });
  it("navigate to bio", () => {
    cy.get('[href="/bio"] > .Button__StyledButton-sc-1906yzf-0').click();
    cy.get(".Bio__TextContainer-bqqjlh-1");
  });
  it("navigate to portfolio", () => {
    cy.get('[href="/portfolio"] > .Button__StyledButton-sc-1906yzf-0').click();
    cy.get(".Portfolio__ImagesContainer-sc-1917ty8-0").should("exist");
  });
});

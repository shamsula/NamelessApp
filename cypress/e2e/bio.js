describe("renders biography component", () => {
  it("renders corretly", () => {
    cy.visit("/bio");
    cy.get(".Stuff__Header-sc-1j02iyq-1").should("have.text", "Biography");
  });
  it("test the Flip Container function", () => {
    cy.visit("/bio");
    cy.get(".Bio__TextContainer-bqqjlh-1")
      .click()
      .wait(500)
      .click()
      .wait(500)
      .click();
    cy.get(".Bio__H4-bqqjlh-3").should("have.text", "Flip Side");
  });
  it("faster consecutive clicks", () => {
    cy.visit("/bio");
    cy.get(".Bio__TextContainer-bqqjlh-1")
      .click()
      .wait(150)
      .click()
      .wait(150)
      .click()
      .wait(150)
      .click();
    cy.get(".Bio__H4-bqqjlh-3").should("have.text", "Intro");
  });
  it("Click back button to return to homepage", () => {
    cy.visit("/bio");
    cy.get(".StyledBack__StyledLink-sc-1ymy4lc-0").click();
    cy.get(".Stuff__Header-sc-1j02iyq-1").should("have.text", "Home");
  });
});

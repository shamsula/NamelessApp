describe("renders the home page", () => {
  it("renders the picture", () => {
    cy.visit("/inspire");
    cy.get(".Picture__PictureCanvas-sc-1fp4lcf-0").should("exist");
  });
  it("Daily Quote button working", () => {
    cy.intercept(
      "https://healthruwords.p.rapidapi.com/v1/quotes/?t=Mindfulness&maxR=1&size=large"
    ).as("quote");
    if (cy.findByText(/get your daily quote/i).should("exist")) {
      cy.findByText(/get your daily quote/i).click();
    }
    cy.wait("@quote").its("response.statusCode").should("eq", 200);
  });
});

describe("Index page", () => {
  it("Loads correctly", () => {
    cy.visit("/");
    cy.findByText("Pokédex").should("exist");
  });
});

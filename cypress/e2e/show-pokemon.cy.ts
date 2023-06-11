const addAnyPokemonFixture = () => {
  cy.intercept("https://pokeapi.co/api/v2/pokemon/*", {
    fixture: "pokemon-returns-ditto.json",
  });
};

const addDittoFixture = () => {
  cy.intercept("https://pokeapi.co/api/v2/pokemon/*", (request) => {
    expect(request.url.endsWith("/ditto")).to.be.true;
    request.reply({
      statusCode: 200,
      fixture: "pokemon-returns-ditto.json",
    });
  });
};

describe("Show Pokémon page", () => {
  it("Shows pokémon data", () => {
    addAnyPokemonFixture();
    cy.visit("/pokemon/ditto");

    cy.findByRole("heading").contains("ditto").should("exist");
    cy.findByAltText(/ditto/).should("exist");
    cy.findByText("normal").should("exist");
  });

  it("Loads from the API the pokémon requested", () => {
    addDittoFixture();
    cy.visit("/pokemon/ditto");

    cy.findByRole("heading").contains("ditto").should("exist");
  });
});

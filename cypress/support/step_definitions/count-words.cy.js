import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("The user opens the wordcounter application", () => {
  cy.visit("https://wordcounter.net/");
});

When("The user puts the text {string}", (text) => {
  cy.get("#box").type(text);
  cy.get("#kwd-accordion-data").children().should("have.length", 10);
});

Then(
  "The system shows the number of words {string} and the number of characters {string}",
  (numberWords, numberCharacters) => {
    const expectedText = `${numberWords} words ${numberCharacters} characters`;
    cy.get('[data-tr-detail="words_characters"]').first().should("contain.text", expectedText);
  }
);

Then("The keyword density section shows", (table) => {
  const rows = table.rows();
  cy.get("#kwd-accordion-data")
    .children()
    .each(($elm, index) => {
      if (index < 3) {
        cy.wrap($elm).find(".word").should("have.text", rows[index][0]);
        cy.wrap($elm)
          .find(".badge")
          .invoke("text")
          .then((text) => {
            expect(text.trim()).to.equal(rows[index][1]);
          });
      }
    });
});
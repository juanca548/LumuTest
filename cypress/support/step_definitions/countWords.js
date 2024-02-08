
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("The user opens the wordcounter application", () => {
    cy.visit("https://wordcounter.net/")
})


When("The user puts the text {string}", (text) => {
    cy.get("#box").type(text)
    cy.wait(1000)
})

Then("The system shows the number of words {string} and the number of characters {string}", (numberWords, numberCharacters) => {
    let expectedText = numberWords + " words " + numberCharacters + " characters" 
    cy.get('[data-tr-detail="words_characters"]').contains(expectedText).should((elem) => {
        expect(elem.text().trim()).to.equal(expectedText);
    });
})

Then("The keyword density section shows", (table) => {
    let rows = table.rows()
    for (var i = 0; i < 3; i++) {
        cy.get("span.word").contains(rows[i][0]).should((elem) => {
            expect(elem.text().trim()).to.equal(rows[i][1]);
        });
        cy.get("#kwd-accordion-data :nth-child("+ i+1 +") .badge")
        .should((elem) => {
            expect(elem.text().trim()).to.equal(rows[i][1]);
        });
        // console.log(rows[i][0])
        // console.log(rows[i][1])
    }
})
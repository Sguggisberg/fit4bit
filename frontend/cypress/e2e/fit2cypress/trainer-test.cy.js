describe("Trainer Test", () =>
  it("Login CY-01", () => {
    cy.visit("http://localhost:4200/");
    cy.get("#cy-login-button").click();
    cy.wait(500);
    cy.get("#cy-login-button-ok").should("be.disabled");
    cy.get("#username").type("trainer1@bla.ch");
    cy.get("#password").type("123456");
    cy.get("#cy-login-button-ok").should("not.be.disabled");
    cy.get("#cy-login-button-ok").click();

    //
    cy.get("#cy-link-your-training").click();
    cy.wait(3000);
    cy.get("input").first().should("have.value", "0");
    cy.get(".cy-button-save").first().should("be.disabled");
    cy.wait(3000);
    cy.get("input").first().type("5");
    cy.get("input").first().should("not.be.disabled");
    cy.get(".cy-button-save").first().click();
    cy.wait(3000);

    //
  }));

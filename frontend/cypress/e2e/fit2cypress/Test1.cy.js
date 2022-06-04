describe("Login Page", () =>
  it("Login", () => {
    cy.visit("http://localhost:4200/");
    cy.get("#cy-login-button").click();
    cy.wait(500);
    cy.get("#cy-login-button-ok").should("be.disabled");
    cy.get("#username").type("trainer1@bla.ch");
    cy.get("#password").type("123456");
    cy.get("#cy-login-button-ok").should("not.be.disabled");
    cy.get("#cy-login-button-ok").click();
    cy.wait(3000);
  }));

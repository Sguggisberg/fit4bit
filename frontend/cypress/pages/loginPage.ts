export const LoginPage = {
  goToLoginPage() {
    cy.visit("http://localhost:4200/");
    cy.get("#cy-login-button").click();
  },
  enterLoginDataTrainer() {
    cy.get("#username").type("trainer1@bla.ch");
    cy.get("#password").type("123456");
  },
  clickLogin() {
    cy.get("#cy-login-button-ok").click();
  },

  loginAsTrainer() {
    LoginPage.goToLoginPage();
    LoginPage.enterLoginDataTrainer();
    LoginPage.clickLogin();
  }

  }

import {TrainingOverviewPage} from "../../pages/trainingOverviewPage";
import {LoginPage} from "../../pages/loginPage";

describe("Trainer Test", () =>
  it("Login CY-01", () => {
      LoginPage.goToLoginPage();
      cy.wait(5000);
      cy.get("#cy-login-button-ok").should("be.disabled");
      LoginPage.enterLoginDataTrainer();
      cy.get("#cy-login-button-ok").should("not.be.disabled");
      cy.get("#cy-login-button-ok").click();

      TrainingOverviewPage.goToOverviewPage();
  //    TrainingOverviewPage.verifyRoute();
   //   cy.get('card-container').should(have.length, 9);

      cy.wait(3000);
      cy.get("input").first().should("have.value", "0");
      cy.get(".cy-button-save").first().should("be.disabled");
      cy.wait(3000);
      cy.get("input").first().type("5");
      cy.get("input").first().should("not.be.disabled");
      cy.get(".cy-button-save").first().click();
      cy.wait(3000);
    }
  ));

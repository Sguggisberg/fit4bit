import { Navigation } from '../../pages/cypressHelper';

describe('Trainer Test', () =>
  it('Trainer Test ', () => {
    // CY-01
    Navigation.goToLoginPage();
    cy.get('#cy-login-button-ok').should('be.disabled');
    Navigation.enterLoginDataTrainer();
    cy.get('#cy-login-button-ok').should('not.be.disabled');
    cy.get('#cy-login-button-ok').click();

    // CY-02
    Navigation.goToOverviewTrainingPage();
    Navigation.verifyRouteTrainingOverview();
    cy.get('input').first().should('have.value', '0');
    cy.get('.cy-button-save').first().should('be.disabled');
    cy.get('input').first().type('5');
    cy.get('input').first().should('not.be.disabled');
    cy.get('.cy-button-save').first().click();
  }));

export const CypressHelper = {
  clickLogin() {
    cy.get('#cy-login-button-ok').click();
  },
};

export const Navigation = {
  verifyLoginItemExist() {
    cy.get('#cy-navigation-item-login-link').should('exist');
  },
  verifyLoginItemNotExist() {
    cy.get('#cy-navigation-item-login-link').should('not.exist');
  },
  goToOverviewTrainingPage() {
    cy.get('#cy-navigation-item-your-training-link').click();
  },
  verifyRouteTrainingOverview() {
    cy.url().should('include', '/trainer/overview');
  },

  goToLoginPage() {
    cy.visit('http://localhost:4200/');
    cy.get('#cy-navigation-item-login-link').click();
  },
  enterLoginDataTrainer() {
    cy.get('#username').type('trainer1@bla.ch');
    cy.get('#password').type('123456');
  },
  enterLoginDataSuperior() {
    cy.get('#username').type('superior1@bla.ch');
    cy.get('#password').type('123456');
  },
  loginAsTrainer() {
    Navigation.goToLoginPage();
    Navigation.enterLoginDataTrainer();
    CypressHelper.clickLogin();
    cy.wait(1000);
  },
  logout() {
    cy.wait(1000);
    cy.get('#cy-navigation-item-personal-menu-link').click();
    cy.get('#cy-navigation-item-personal-logout-link').click();
    cy.wait(1000);
  },
  verifyTrainingNavigationNotExist() {
    cy.get('#cy-navigation-item-payroll-link').should('not.exist');
    cy.get('#cy-navigation-item-your-training-link').should('not.exist');
  },
  verifyTrainingNavigationExist() {
    cy.get('#cy-navigation-item-payroll-link').should('exist');
    cy.get('#cy-navigation-item-your-training-link').should('exist');
  },
  verifySuperiorNavigationNotExist() {
    cy.get('#cy-navigation-item-new-user-link').should('not.exist');
    cy.get('#cy-navigation-item-new-room-link').should('not.exist');
    cy.get('#cy-navigation-item-review-link').should('not.exist');
    cy.get('#cy-navigation-item-new-training-typ-link').should('not.exist');
    cy.get('#cy-navigation-item-new-training-link').should('not.exist');
  },
  verifySuperiorNavigationExist() {
    cy.get('#cy-navigation-item-new-user-link').should('exist');
    cy.get('#cy-navigation-item-new-room-link').should('exist');
    cy.get('#cy-navigation-item-review-link').should('exist');
    cy.get('#cy-navigation-item-new-training-typ-link').should('exist');
    cy.get('#cy-navigation-item-new-training-link').should('exist');
  },
  verifyLogoutMenuItemNotExist() {
    cy.get('#cy-navigation-item-personal-logout-link').should('not.exist');
  },
  verifyLogoutMenuItemExist() {
    cy.get('#cy-navigation-item-personal-menu-link').should('exist');
    cy.get('#cy-navigation-item-personal-logout-link').should('exist');
  },
  loginAsSuperior() {
    Navigation.goToLoginPage();
    Navigation.enterLoginDataSuperior();
    CypressHelper.clickLogin();
  },
};

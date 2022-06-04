export const TrainingOverviewPage = {
  verifyRoute() {
    cy.url().should('include', '/trainer/overview')
  },
  goToOverviewPage() {
    cy.get("#cy-link-your-training").click();
  }
}

import { Navigation } from '../../pages/cypressHelper';

describe('Trainer Navigations Menu', () =>
  it('Testing ', () => {
    // Trainer Nav
    Navigation.goToLoginPage();
    Navigation.verifyLoginItemExist();
    Navigation.verifyTrainingNavigationNotExist();
    Navigation.verifyLogoutMenuItemNotExist();
    Navigation.loginAsTrainer();
    Navigation.verifyLoginItemNotExist();
    Navigation.verifyTrainingNavigationExist();
    Navigation.verifyLogoutMenuItemExist();
    Navigation.verifySuperiorNavigationNotExist();
    Navigation.logout();

    // Superior Nav
    Navigation.goToLoginPage();
    Navigation.verifyLoginItemExist();
    Navigation.verifyTrainingNavigationNotExist();
    Navigation.verifyLogoutMenuItemNotExist();
    Navigation.loginAsSuperior();
    Navigation.verifyLoginItemNotExist();
    Navigation.verifyTrainingNavigationNotExist();
    Navigation.verifyLogoutMenuItemExist();
    Navigation.verifySuperiorNavigationExist();
    Navigation.logout();
  }));

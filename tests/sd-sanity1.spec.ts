import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import LoginCredentials from '../dataSources/LoginCredentials';
import ApplicationProperties from '../dataSources/ApplicationProperties';

test('1. SignIn Succeed test (with some pom comlexity)', async ({ page }) => {
    // init page
    const loginPage = new LoginPage(page); // Use different variableName from pageName
    console.log('start test')
    // await loginPage.signInToApp("standard_user", "secret_sauce"); // passes arguments for the SignInToApp method
    // signInToApp method below makes use of Variables from dataSources...
    // await loginPage.signInToApp(ApplicationProperties.URL_LOGIN, LoginCredentials.USER_IS_OK, LoginCredentials.PASS_IS_OK);
    // await loginPage.signInToApp(); // some or all inputs empty -> method will use relevant pre-defined defaults (as stated)
    await loginPage.signInToApp(ApplicationProperties.URL_LOGIN,); // with only url - below (next test) show with error_user !
    await loginPage.validatePageUrl(`${ApplicationProperties.URL_LOGIN}/inventory.html`); // validate SignIn was successful !!
    await loginPage.delay(1000);
    console.log('end test')
    }
);

test('2. SignIn Failed test (with some pom comlexity)', async ({ page }) => {
    // init page
    const loginPage = new LoginPage(page);
    console.log('start test')
    await loginPage.signInToApp(ApplicationProperties.URL_LOGIN,LoginCredentials.USER_LOCKED);
    await loginPage.validatePageUrl(ApplicationProperties.URL_LOGIN); // validate SignIn Failed - we are still on LoginPage !!
    await loginPage.delay(1000);
    console.log('end test')
    }
);
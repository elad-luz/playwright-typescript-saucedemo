import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import LoginCredentials from '../dataSources/LoginCredentials';
import ApplicationProperties from '../dataSources/ApplicationProperties';
import { LoginErrors } from '../dataSources/LoginErrors';

test.describe('SignIn Failures (negative scenarios)', async () => {

    let loginPage: LoginPage; // global variable = relevant to all tests

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
    })

    test('SignIn locked user', async ({ page }) => {
        console.log('start Locked user test');
        await loginPage.signInToApp(ApplicationProperties.BASE_URL, LoginCredentials.USER_LOCKED);
        await loginPage.validatePageError(LoginErrors.ERROR_LOCKED_OUT_USER); // error value taken from file
        await loginPage.validatePageUrl(ApplicationProperties.BASE_URL);
        await loginPage.delay(1000);
        console.log('end test');
    })

    test('SignIn incorrect user', async ({ page }) => {
        console.log('start incorrect user test');
        await loginPage.signInToApp(ApplicationProperties.BASE_URL, "incorrect_user");
        await loginPage.validatePageError(LoginErrors.ERROR_USER_PASS_NOT_MATCH);
        await loginPage.delay(1000);
        console.log('end test');
    })

    test('SignIn empty user', async ({ page }) => {
        console.log('start empty user test');
        await loginPage.signInToApp(ApplicationProperties.BASE_URL, LoginCredentials.USER_EMPTY);
        await loginPage.validatePageError(LoginErrors.ERROR_USER_MISSING);
        await loginPage.delay(1000);
        console.log('end test');
    })

    test('SignIn incorrect pass', async ({ page }) => {
        console.log('start incorrect pass test');
        await loginPage.signInToApp(ApplicationProperties.BASE_URL, LoginCredentials.USER_IS_OK, LoginCredentials.PASS_WRONG);
        await loginPage.validatePageError(LoginErrors.ERROR_USER_PASS_NOT_MATCH);
        await loginPage.delay(1000);
        console.log('end test');
    })

    test('SignIn empty pass', async ({ page }) => {
        console.log('start empty pass test');
        await loginPage.signInToApp(ApplicationProperties.BASE_URL, LoginCredentials.USER_IS_OK, LoginCredentials.PASS_EMPTY);
        await loginPage.validatePageError(LoginErrors.ERROR_PASS_MISSING);
        await loginPage.delay(1000);
        console.log('end test');
    })
});
import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ApplicationProperties from '../dataSources/ApplicationProperties';
import ProductsInventoryPage from '../pages/ProductsInventoryPage';

test.describe('SignIn & Add 2 Products - DEMO', async () => {

    let loginPage: LoginPage; // global var. for all!
    let productsInventoryPage: ProductsInventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productsInventoryPage = new ProductsInventoryPage(page);
    })

    test('SignIn and Add (with more pom comlexity & products page', async ({ page }) => {
        console.log('start DEMO test');
        await loginPage.signInToApp(); // empty input is using Success Login credentials as default
        await productsInventoryPage.validatePageUrl(ApplicationProperties.INVENTORY_URL); // logged
        await productsInventoryPage.validateTitle("Products");
        await productsInventoryPage.addProductBackpack(); // add (remove etc.) should be refined...
        await productsInventoryPage.addProductBikeLight();
        await page.locator('a').filter({ hasText: '2' }).click(); // cart should be in Common page!
        await loginPage.delay(2500);
        console.log('end test');
    })
});
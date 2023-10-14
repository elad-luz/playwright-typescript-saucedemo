import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import LoginCredentials from '../dataSources/LoginCredentials';
import ApplicationProperties from '../dataSources/ApplicationProperties';
import ProductsInventoryPage from '../pages/ProductsInventoryPage';

test('1. SignIn and Add (with more pom comlexity & products page)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsInventoryPage = new ProductsInventoryPage(page);
    console.log('start test');
    await loginPage.signInToApp(); // empty credentials: successLogin
    await productsInventoryPage.validatePageUrl(ApplicationProperties.BASE_URL + "/inventory.html");
    await productsInventoryPage.validateTitle("Products");
    await loginPage.delay(1000);
    console.log('end test');
});
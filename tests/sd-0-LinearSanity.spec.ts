import { test, expect } from '@playwright/test';


test('0. Login & AddItem test (with-out comlexity)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Expect LI page title "to contain" a substring
  await expect(page).toHaveTitle(/Swag Labs/);

  // Successful Login using proper inputs of User & Pass into TextBoxs
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Add 2 Products to cart - and click the cart to see they were added
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('a').filter({ hasText: '2' }).click();
});
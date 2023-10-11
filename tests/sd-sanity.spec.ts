import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
 // Expect LI page title "to contain" a substring
    await expect(page).toHaveTitle(/Swag Labs/);

  // input User & Pass strings to TextBoxs
  await page.getByText('Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitch_userPassword for all users:secret_sauce');

  // input User & Pass strings to TextBoxs
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Add Products
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('a').filter({hasText: '2'}).click();
});

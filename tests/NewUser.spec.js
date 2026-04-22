import { test, expect } from '@playwright/test';

test('User Registration', async ({ page }) => {
  await page.goto('https://automationexercise.com/', { timeout: 60000 });

  // Navigate to Signup/Login
  await page.getByRole('link', { name: ' Signup / Login' }).click();

  // Fill in signup form
  const email = `testuser_${Date.now()}@gmail.com`;
  await page.getByRole('textbox', { name: 'Name' }).fill('Jacob');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();

  // Account details
  await page.waitForURL('**/signup');
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'Password *' }).fill('Langa@24');
  await page.locator('#days').selectOption('4');
  await page.locator('#months').selectOption('4');
  await page.locator('#years').selectOption('2000');

  // Address info
  await page.getByRole('textbox', { name: 'First name *' }).fill('Jacob');
  await page.getByRole('textbox', { name: 'Last name *' }).fill('Langa');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('3082');
  await page.getByRole('textbox', { name: 'State *' }).fill('Gauteng');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Pretoria');
  await page.locator('#zipcode').fill('0152');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('1234567892');

  // Submit and verify
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByText('Account Created!')).toBeVisible();
});
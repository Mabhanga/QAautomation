import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('User Login - Valid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('jacobmotsweni18@gmail.com', 'Langa@24');

  // Verify successful login
  await expect(page.getByRole('heading', { name: 'Full-Fledged practice website' })).toBeVisible();
});

test('User Login - Invalid Credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('jacobmotsweni@gmail.com', 'Langa@24');

  // Verify error message
  await expect(page.getByText('Your email or password is')).toBeVisible();
});
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('user can login and logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('jacobmotsweni18@gmail.com', 'Langa@24');

  // Logout
  await page.getByRole('link', { name: ' Logout' }).click();
  await expect(page.getByText('Login to your account')).toBeVisible();
});




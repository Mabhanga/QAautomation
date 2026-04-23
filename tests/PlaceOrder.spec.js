import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Proceed To Checkout', async ({ page }) => {
   const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('jacobmotsweni18@gmail.com', 'Langa@24');
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
});
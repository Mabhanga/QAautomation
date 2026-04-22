import { test, expect } from '@playwright/test';

test('Verify Product Detail Page', async ({ page }) => {
  await page.goto('https://automationexercise.com/product_details/1', { timeout: 60000 });
  await expect(page.getByRole('heading', { name: 'Blue Top' })).toBeVisible();
});
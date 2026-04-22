import { test, expect } from '@playwright/test';

test('Search Product', async ({ page }) => {
  await page.goto('https://automationexercise.com/products', { timeout: 60000 });
  await page.getByRole('textbox', { name: 'Search Product' }).fill('winter top');
  await page.locator('#submit_search').click();
  await expect(page.getByText('Winter Top').nth(1)).toBeVisible();
});
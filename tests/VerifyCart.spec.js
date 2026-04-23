import { test, expect } from '@playwright/test';

test('Verify Cart', async ({ page }) => {
  await page.goto('https://automationexercise.com/products', { timeout: 60000 });
  await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();

  // Scroll past heading and add first product
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(1000);
  await page.locator('.productinfo').first().hover();
  await page.locator('[data-product-id="1"]').first().click();
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  // Add second product
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(1000);
  await page.locator('.productinfo').nth(1).hover();
  await page.locator('[data-product-id="2"]').first().click();
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  // Add third product
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(1000);
  await page.locator('.productinfo').nth(2).hover();
  await page.locator('[data-product-id="3"]').first().click();
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  // Go to cart
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page.getByText('Shopping Cart')).toBeVisible();
});


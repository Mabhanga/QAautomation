import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await expect(page.locator('.col-sm-9')).toBeVisible();
});
import { test, expect } from '@playwright/test';

test('Register with existing email', async ({ page }) => {
  await page.goto('https://automationexercise.com/', { timeout: 60000 });
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Jacob');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('jacobmotsweni18@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page.getByText('Email Address already exist!')).toBeVisible();
});


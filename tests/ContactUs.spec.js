import { test, expect } from '@playwright/test';

test('Contact Us', async ({ page }) => {
  page.on('dialog', dialog => dialog.accept());
  
  await page.goto('https://automationexercise.com/', { timeout: 60000 });
  await page.getByRole('link', { name: ' Contact us' }).click();
  await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).fill('jacob');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('jacobmotsweni18@gmail.com');
  await page.getByRole('textbox', { name: 'Subject' }).fill('test');
  await page.getByRole('textbox', { name: 'Your Message Here' }).fill('test 123');
  await page.getByRole('button', { name: 'Submit' }).click();
});
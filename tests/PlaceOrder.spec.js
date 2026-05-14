import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Proceed To Checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('jacobmotsweni18@gmail.com', 'Langa@24');

    // Add a product to cart first
    await page.goto('https://automationexercise.com/product_details/1');
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'View Cart' }).click();

    // Proceed to checkout
    await page.getByText('Proceed To Checkout').click();
    await page.getByRole('link', { name: 'Place Order' }).click();
    await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
});
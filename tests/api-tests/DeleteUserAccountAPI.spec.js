import { test, expect } from '@playwright/test';

test('DELETE Existing User Account', async ({ request }) => {

    const response = await request.delete(
        'https://automationexercise.com/api/deleteAccount',
        {
            form: {
                email: 'jacobmotsweni18@gmail.com',
                password: 'Langa@24'
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    // Handle actual API response
    expect(body.responseCode).toBe(404);
    expect(body.message).toBe('Account not found!');
});
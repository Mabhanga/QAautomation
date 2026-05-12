import { test, expect } from '@playwright/test';

test('POST Verify Login with Invalid Credentials', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: 'invalid@example.com',
            password: 'invalidpassword'
        }
    });
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.responseCode).toBe(404);
    expect(body.message).toBe('User not found!');
    console.log(body);
});


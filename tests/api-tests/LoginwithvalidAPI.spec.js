import { test, expect } from '@playwright/test';

test('POST Verify Login', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: 'jacobmotsweni18@gmail.com',
            password: 'Langa@24'
        }
    });
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User exists!');
    console.log(body);
});

test('POST Verify Login Missing Parameters', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/verifyLogin');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.responseCode).toBe(400);
    expect(body.message).toBe('Bad request, email or password parameter is missing in POST request.');
    console.log(body);
});
    
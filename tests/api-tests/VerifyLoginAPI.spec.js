import { test, expect } from '@playwright/test';

test('POST Verify Login with Valid Credentials', async ({ request }) => {
    const uniqueEmail = `verifylogin_${Date.now()}@example.com`;

    // Create account first
    const createResponse = await request.post('https://automationexercise.com/api/createAccount', {
        form: {
            name: 'Jacob Motsweni',
            email: uniqueEmail,
            password: 'Password123',
            title: 'Mr',
            birth_date: '5',
            birth_month: 'June',
            birth_year: '1993',
            firstname: 'Jacob',
            lastname: 'Motsweni',
            company: 'Test Company',
            address1: '123 Main Street',
            address2: 'Apartment 1',
            country: 'South Africa',
            zipcode: '2000',
            state: 'Gauteng',
            city: 'Johannesburg',
            mobile_number: '0649546712'
        }
    });

    const createBody = await createResponse.json();
    expect(createBody.responseCode).toBe(201);

    // Now verify login
    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
        form: {
            email: uniqueEmail,
            password: 'Password123'
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
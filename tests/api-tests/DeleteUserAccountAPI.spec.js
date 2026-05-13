import { test, expect } from '@playwright/test';

test('DELETE Existing User Account', async ({ request }) => {
    const uniqueEmail = `deleteuser_${Date.now()}@example.com`;

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

    // Now delete the account
    const deleteResponse = await request.delete('https://automationexercise.com/api/deleteAccount', {
        form: {
            email: uniqueEmail,
            password: 'Password123'
        }
    });

    expect(deleteResponse.status()).toBe(200);

    const deleteBody = await deleteResponse.json();
    console.log(deleteBody);

    expect(deleteBody.responseCode).toBe(200);
    expect(deleteBody.message).toBe('Account deleted!');
});

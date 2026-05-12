import { test, expect } from '@playwright/test';

test('POST Create User', async ({ request }) => {
    const uniqueEmail = `testuser_${Date.now()}@gmail.com`;
    
    const response = await request.post('https://automationexercise.com/api/createAccount', {
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

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(201);
    expect(body.message).toBe('User created!');
    console.log(body);
});
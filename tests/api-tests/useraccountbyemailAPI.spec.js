import { test, expect } from '@playwright/test';

test('GET User Account Detail By Email', async ({ request }) => {

    const uniqueEmail = `jacob${Date.now()}@example.com`;

    // 1. CREATE USER FIRST
    const createResponse = await request.post(
        'https://automationexercise.com/api/createAccount',
        {
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
        }
    );

    const createBody = await createResponse.json();
    expect(createBody.responseCode).toBe(201);

    // 2. GET USER BY EMAIL
    const response = await request.get(
        'https://automationexercise.com/api/getUserDetailByEmail',
        {
            params: {
                email: uniqueEmail
            }
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    expect(body.responseCode).toBe(200);

    // API returns user object inside response.user
    expect(body.user.email).toBe(uniqueEmail);
});
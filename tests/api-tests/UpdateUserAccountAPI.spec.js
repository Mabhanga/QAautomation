import { test, expect } from '@playwright/test';

test('PUT Update User Account', async ({ request }) => {

    const uniqueEmail = `jacob${Date.now()}@example.com`;

    // CREATE ACCOUNT FIRST
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

    // UPDATE ACCOUNT
    const updateResponse = await request.put(
        'https://automationexercise.com/api/updateAccount',
        {
            form: {
                name: 'Jacob Updated',
                email: uniqueEmail,
                password: 'Password123',
                title: 'Mr',
                birth_date: '5',
                birth_month: 'June',
                birth_year: '1993',
                firstname: 'Jacob',
                lastname: 'Motsweni',
                company: 'Updated Company',
                address1: '456 New Street',
                address2: 'Apartment 2',
                country: 'South Africa',
                zipcode: '2001',
                state: 'Gauteng',
                city: 'Johannesburg',
                mobile_number: '0649546712'
            }
        }
    );

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();

    console.log(updateBody);

    expect(updateBody.responseCode).toBe(200);
    expect(updateBody.message).toBe('User updated!');
});


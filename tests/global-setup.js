import { request } from '@playwright/test';

async function globalSetup() {
    const context = await request.newContext();

    await context.post('https://automationexercise.com/api/createAccount', {
        form: {
            name: 'Jacob Motsweni',
            email: 'jacobmotsweni18@gmail.com',
            password: 'Langa@24',
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

    await context.dispose();
}

export default globalSetup;


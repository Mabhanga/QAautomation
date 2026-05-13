import { request } from '@playwright/test';

async function globalTeardown() {
    const context = await request.newContext();

    await context.delete('https://automationexercise.com/api/deleteAccount', {
        form: {
            email: 'jacobmotsweni18@gmail.com',
            password: 'Langa@24'
        }
    });

    await context.dispose();
}

export default globalTeardown;
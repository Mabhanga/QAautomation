import { test, expect } from '@playwright/test';

test('POST Search Product', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/searchProduct', {
        form: {
            search_product: 'top'
        }
    });
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body).toHaveProperty('products');
    expect(body.products.length).toBeGreaterThan(0);
    console.log(body);
});


test('POST Search Product Without Parameter', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/searchProduct');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.responseCode).toBe(400);
    expect(body.message).toBe('Bad request, search_product parameter is missing in POST request.');
    console.log(body);
});
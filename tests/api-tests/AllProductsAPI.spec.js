import { test, expect } from '@playwright/test';

test('Get All Products', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/productsList');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body).toHaveProperty('products');
    expect(body.products.length).toBeGreaterThan(0);
    expect(body.products[0]).toHaveProperty('name');
    console.log(body);
});


test('POST To All Products - Method Not Allowed', async ({ request }) => {
    const response = await request.post('https://automationexercise.com/api/productsList');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
});
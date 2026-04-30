import { test, expect } from '@playwright/test';

test('Get All Brands', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/brandsList');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body).toHaveProperty('brands');
    expect(body.brands.length).toBeGreaterThan(0);
    expect(body.brands[0]).toHaveProperty('brand');
    console.log(body);
});


test('PUT to all brands', async ({ request }) => {
    const response = await request.put('https://automationexercise.com/api/brandsList');
    
    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
    console.log(body);
});

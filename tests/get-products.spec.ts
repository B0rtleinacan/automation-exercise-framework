import { test, expect, APIRequestContext } from '@playwright/test';

test('Get all products, returns 200', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.get('https://automationexercise.com/api/productsList');
    expect(response.status()).toBe(200);
});
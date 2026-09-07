import { test, expect, APIRequestContext, Page } from '@playwright/test';

// All API tests are in accordance with the API testing section in the Automation Exercise website. 

// API 1
test('Get all products, returns 200', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.get('https://automationexercise.com/api/productsList');
    expect(response.status()).toBe(200);
});

// API 2
test('Post to all products, returns 405', async ({ request }: { request: APIRequestContext }) => {
    const response = await request.post('https://automationexercise.com/api/productsList', {
        data: {
            id: 44,
            name: 'Test Product',
            price: 99.99,
            brand: 'Test Brand',
            category: {
                userType: {
                    userType: 'Test User Type'
                },
                category: 'Test Category'
            }
        }
    });

    const responseBody = await response.json();

    expect(responseBody).toMatchObject({
        "responseCode": 405,
        "message": "This request method is not supported."
    });
});

// API 3
test('Get all brands, returns 200', async ({ request }: { request: APIRequestContext }) => {
    const response = await request.get('https://automationexercise.com/api/brandsList');
    expect(response.status()).toBe(200);
});

// API 4
test('PUT to all brands, returns 405', async ({ request }: { request: APIRequestContext }) => {
    const response = await request.put('https://automationexercise.com/api/brandsList', {
        data: {
            id: 1,
            name: 'Test Brand'
        }
    });

    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
        "responseCode": 405,
        "message": "This request method is not supported."
    });
});

// API 5
test('Post to search products, returns 200', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.post('https://automationexercise.com/api/searchProduct', {
        data: {
            name: 'Blue Top'
        }
    });
    expect(response.status()).toBe(200);
});

// API 6
test('Post to search products with no parameters, returns 400', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.post('https://automationexercise.com/api/searchProduct', {
        data: {
            name: ' '
        }
    });

    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
        "responseCode": 400,
        "message": "Bad request, search_product parameter is missing in POST request."
    })
});
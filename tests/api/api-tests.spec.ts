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
        form: {
            id: 44,
            name: 'Test Product',
            price: 99.99,
            brand: 'Test Brand',
            'category[userType][userType]': 'Test User Type',
            'category[category]': 'Test Category'
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
        form: {
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
        form: {
            name: 'Blue Top'
        }
    });
    expect(response.status()).toBe(200);
});

// API 6
test('Post to search products with no parameters, returns 400', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.post('https://automationexercise.com/api/searchProduct', {
        form: {
            name: ' '
        }
    });

    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
        "responseCode": 400,
        "message": "Bad request, search_product parameter is missing in POST request."
    })
});

// API 11
test('Post create an account, returns 201', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.post('https://automationexercise.com/api/createAccount', {
        form: {
            name: 'Test User',
            email: 'testsomethingPlease@yourmail.com',
            password: 'TestPassword123',
            title: 'Mr',
            birth_date: '1990-01-01',
            birth_month: 'January',
            birth_year: '1990',
            firstname: 'Test',
            lastname: 'User',
            company: 'Test Company',
            address1: '123 Test St',
            address2: 'Apt 4',
            country:'United States',
            zipcode: '12345',
            state: 'Test State',
            city: 'Test City',
            mobile_number: '1234567890'
        }
    });

    const responseBody = await response.json();
    expect(responseBody).toMatchObject({
        "responseCode": 201,
        "message": "User created!"
    });
});

// API 13
test('Update an account using PUT, returns 200', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.put('https://automationexercise.com/api/updateAccount', {
        form: {
            email: 'testsomethingPlease@yourmail.com',
            password: 'TestingPassword123',
            name: 'Updated Test User'
        }
    });
    expect(response.status()).toBe(200);
});

// API 14
test('Get account details by email and using GET, returns 200', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
        form: {
            email: 'testsomethingPlease@yourmail.com'
        }
    });
    expect(response.status()).toBe(200);
});

// API 12
test('Delete an account using DELETE, returns 200', async ({ request }:{ request: APIRequestContext }) => {
    const response = await request.delete('https://automationexercise.com/api/deleteAccount', {
        form: {
            email: 'testsomethingPlease@yourmail.com',
            password: 'TestPassword123'
        }
    });
    expect(response.status()).toBe(200);
});


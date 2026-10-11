import { test, expect, Page } from '@playwright/test';
import { Login } from '../../POM/login';

// E2E flow for User login interactions, edge cases are handled on the lower lines of code outlined "edge cases"

// Test Case 1: Register User 
test('Login page exists', async ({ page }: { page: Page}) => {
    const login = new Login(page);

    await login.gotoMain();
    await login.gotoSignupLogin();

    await expect(page.getByText('Login to your account')).toBeVisible();
});

test('User can go to signup form', async ({ page }: { page: Page}) => {
    const login = new Login(page);

    await login.gotoMain();
    await login.gotoSignupLogin();
    await login.signup('testuser', 'yes@no.com');

    await expect(page.locator('#name')).toBeVisible();    
});

test('User can fill out Signup form and create an account. After, delete account', async ({ page }: { page: Page }) => {
    const login = new Login(page);

    // Goes to signup/login page and navigates to signup form
    await login.gotoMain();
    await login.gotoSignupLogin();
    await login.signup('testuser', 'yes@no.com');

    // fills out signup form
   await login.chooseTitle('Mr');
   await login.filloutAccountInformation('testuser', 'yes@no.com', 'password123');
   await login.addressInformation('testuser', 'testuser', '123 Main St', 'Apt 4B', 'California', 'Los Angeles', '90210', '555-1234');

   await expect(page.getByText('Account Created!')).toBeVisible();

   await login.continueButton();
   await login. deleteAccountClick();

   await expect(page.getByText('Account Deleted!')).toBeVisible();
});

// Test Case 2: Login User with correct email and password
test('User can login with correct email and password', async ({ page }: { page: Page }) => {
    const login = new Login(page);

    await login.gotoMain();
    await login.gotoSignupLogin();
    await login.signup('testuser', 'yes@no.com');

    await login.filloutAccountInformation('testuser', 'yes@no.com', 'password123');
    await login.addressInformation('testuser', 'testuser', '123 Main St', 'Apt 4B', 'California', 'Los Angeles', '90210', '555-1234');

    await expect(page.getByText('Account Created!')).toBeVisible();

    await login.continueButton();
    await login.logout();

    await login.loginToAccount('yes@no.com', 'password123');
    
    await expect(page.getByText('Logout')).toBeVisible();

    await login.deleteAccountClick();

    await expect(page.getByText('Account Deleted!')).toBeVisible();
});
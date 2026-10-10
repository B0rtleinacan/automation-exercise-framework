import { test, expect, Page } from '@playwright/test';
import { Login } from '../../POM/login';

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

    await expect(page.getByText('Enter Account Information')).toBeVisible();    
});

import { test, expect, Page } from '@playwright/test';
import { Login } from '../POM/login';

test('Login page exists', async ({ page }: { page: Page}) => {
    const login = new Login(page);

    await login.gotoMain();
    await login.login_signupButton.click();

    expect(login.page.getByText('Login to your acount!'))
})

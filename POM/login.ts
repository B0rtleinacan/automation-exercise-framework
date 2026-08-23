import { type Locator, type Page } from '@playwright/test';

export class Login {
    readonly page;
    readonly login_signupButton: Locator;
    readonly loginEmailAddress: Locator;
    readonly loginPassword: Locator;
    readonly signupEmailAddress: Locator;
    readonly signupName: Locator;
    readonly logoutButton: Locator;
    readonly deleteAccount: Locator;
    readonly loginButton: Locator;
    readonly signupButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.login_signupButton = page.getByRole('link', { name: 'Signup /  Login' });
        this.loginEmailAddress = page.locator('.login-form').getByLabel('Email Address')
        this.loginPassword = page.getByLabel('Password');
        this.signupName = page.getByLabel('Name');
        this.signupEmailAddress = page.locator('.signup-form').getByLabel('Email Address');
        this.logoutButton = page.getByRole('link', { name: ' Logout'});
        this.deleteAccount = page.getByRole('link', { name: 'Delete Account' });
        this.loginButton = page.getByLabel('Login');
        this.signupButton = page.getByLabel('Signup');
    }

    async goto() {
        await this.page.goto('https://www.automationexercise.com/');
    }

    async login(email: string, password: string) {
        await this.login_signupButton.click();
        await this.loginEmailAddress.fill(email);
        await this.loginPassword.fill(password);
        await this.signupButton.click();
    }

    async signup(name: string, email: string) {
        await this.login_signupButton.click();
        await this.signupName.fill(name);
        await this.signupEmailAddress.fill(email);
        await this.signupButton.click();
    }
}
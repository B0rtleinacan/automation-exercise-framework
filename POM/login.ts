import { type Locator, type Page } from '@playwright/test';
import { NavBar } from './NavBar';

export class Login {
    readonly navBar: NavBar;;

    constructor(private readonly page: Page) {
        this.navBar = new NavBar(page);
    }

    async gotoMain() {
        await this.page.goto('https://www.automationexercise.com/');
    }

    async gotoSignupLogin() {
        await this.navBar.gotoSignupLogin();
    }

    async login(email: string, password: string) {
        await this.page.getByRole('link', { name: 'Signup /  Login' }).click();
        await this.page.locator('.login-form').getByLabel('Email Address').fill(email);
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByLabel('Login').click();
    }

    async signup(name: string, email: string) {
        await this.page.getByRole('link', { name: 'Signup /  Login' }).click();
        await this.page.getByLabel('Name').fill(name);
        await this.page.locator('.signup-form').getByLabel('Email Address').fill(email);
        await this.page.getByLabel('Signup').click();
    }

    async logout() {
        await this.page.getByRole('link', { name: ' Logout'}).click();
    }

    async deleteAccountClick() {
        await this.page.getByRole('link', { name: 'Delete Account' }).click();
    }
}
import { type Locator, type Page } from '@playwright/test';
import { NavBar } from './NavBar';

export class Login {
    readonly navBar: NavBar;

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
        await this.page.locator('input[name="name"]').fill(name);
        await this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
        await this.page.locator('button').filter({ hasText: 'Signup' }).click();
    }

    async chooseTitle(title: string) {
        // Conditional to handle title selection
        if (title === 'Mr') {
            await this.page.locator('#id_gender1').click();
        } else if (title === 'Mrs') {
            await this.page.locator('#id_gender2').click();
        } else {
            console.log('No title selected');
        }
    }

    async filloutAccountInformation(name: string, email: string, password: string) {

        /* commented out incase these are needed, at the moment they are pre-filled when going to the Signup form

        //await this.page.locator('#name').fill(name);
        //await this.page.locator('#email').fill(email);

        */

        await this.page.locator('#password').fill(password);
        await this.page.locator('#days').selectOption('2');
        await this.page.locator('#months').selectOption('February');
        await this.page.locator('#years').selectOption('1990');
    }

    async addressInformation(firstName: string, lastName: string, address1: string, address2: string, state: string, city: string, zipcode: string, mobileNumber: string) {
        const countryDropdown = this.page.locator('#country');

        await this.page.locator('#first_name').fill(firstName);
        await this.page.locator('#last_name').fill(lastName);
        await this.page.locator('#address1').fill(address1);
        await this.page.locator('#address2').fill(address2);
        await countryDropdown.selectOption('United States');
        await this.page.locator('#state').fill(state);
        await this.page.locator('#city').fill(city);
        await this.page.locator('#zipcode').fill(zipcode);
        await this.page.locator('#mobile_number').fill(mobileNumber);

        await this.page.locator('button').filter({ hasText: 'Create Account' }).click();

    }

    async noInputSignup() {
        await this.page.getByRole('link', { name: 'Signup / Login' }).click();
        await this.page.locator('button').filter({ hasText: 'Signup' }).click();
    }

    async continueButton() {
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }

    async loginToAccount(email: string, password: string) {
        await this.page.getByRole('link', { name: 'Signup / Login' }).click();
        await this.page.locator('#email').fill(email);
        await this.page.locator('#password').fill(password);
        await this.page.locator('button').filter({ hasText: 'Login' }).click();
    }

    async logout() {
        await this.page.getByRole('link', { name: ' Logout'}).click();
    }

    async deleteAccountClick() {
        await this.page.getByRole('link', { name: 'Delete Account' }).click();
    }
}
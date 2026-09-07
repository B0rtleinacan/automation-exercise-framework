import { type Locator, type Page } from '@playwright/test';
import { NavBar } from './NavBar';

export class Cart {
    readonly navBar: NavBar;

    constructor(private readonly page: Page) {
        this.navBar = new NavBar(page);
    }

    async gotoMain() {
        await this.page.goto('https://www.automationexercise.com/');
    }

    async gotoCart() {
        await this.navBar.gotoCart();
    }
}
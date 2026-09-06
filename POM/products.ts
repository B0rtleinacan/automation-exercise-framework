import { type Locator, type Page } from '@playwright/test';
import { NavBar } from './NavBar';

export class Products {
    readonly navBar: NavBar;

    constructor(private readonly page: Page) {
        this.navBar = new NavBar(this.page);
    }

    async gotoMain() {
        await this.page.goto('https://www.automationexercise.com/');
    }

    async gotoProducts() {
        await this.navBar.gotoProducts();
    }
}
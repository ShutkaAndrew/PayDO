import {Page, Locator} from '@playwright/test'

export class HomePage {
    private readonly page:Page;
    private openAccountBtn: Locator;
    public readonly cookieAcceptBtn: Locator;

    constructor(page:Page) {
        this.page = page;
        this.openAccountBtn = page.locator('.cards-main-baner__button', {hasText: 'Open account'});
        this.cookieAcceptBtn = page.getByRole('button', {name: "Accept"});

    } 

    


// navigate to the Home page
    async goto(){
        await this.page.goto('/');
    }

// click the Open account btn to navigate to the registration from
    async clickOpenAccount(){
        await this.openAccountBtn.click();
    }
// Accept cookie
    async acceptCookie(){
        await this.cookieAcceptBtn.click();
    }
}
import {Page, Locator} from '@playwright/test'

export class InputFields {
    page: Page;
    public readonly emailInput: Locator;
    public  passwordInput: Locator;
    public emailError: Locator;
    public PasswordError: Locator;

    constructor(page:Page){
        this.page = page;
        this.emailInput = page.getByPlaceholder('Enter Email');
        this.passwordInput = page.getByPlaceholder('Enter password');
        this.emailError = page.locator('ngp-text-field mat-error', {hasText:"Please fill in this field to continue"});
        this.PasswordError = page.locator('ngp-password-field mat-error', {hasText: " Please fill in this field to continue "});
    }

    async fillEmail(email:string) {
        await this.emailInput.fill(email);
    }

    async fillPassword(password:string){
        await this.passwordInput.fill(password);
    }

    async fillCredentials(email:string, password:string){
        await this.fillEmail(email);
        await this.fillPassword(password);
    
    }
}

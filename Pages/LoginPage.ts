import {Page, Locator} from '@playwright/test'
import { InputFields } from './Composition/AuthFormFields';

export class LoginPage {
    readonly  fields: InputFields;
    public readonly page:Page;
    private readonly showPasswordIcon: Locator;
    public readonly logInBtn: Locator;
    public validationErrorMessage: Locator;



    constructor(page:Page){
        this.fields = new InputFields(page);
        this.page = page;
        this.fields.passwordInput = page.getByPlaceholder('Enter password').nth(0);
        this.showPasswordIcon = page.locator('ngp-icon[role="img"][aria-hidden="true"]');
        this.logInBtn = page.getByRole('button', {name:"Log in"});
        this.validationErrorMessage = page.locator('ngp-info-block-content',{hasText:"The email address or password you entered is incorrect"})
        

    }

    async clickLogin(){
        await this.logInBtn.click();
    }

    async login(email:string, password:string){
        await this.fields.fillCredentials(email, password);
        await this.clickLogin();
    }

    
}
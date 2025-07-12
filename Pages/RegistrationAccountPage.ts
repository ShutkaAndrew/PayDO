import {Page, Locator} from '@playwright/test'
import { InputFields } from './Composition/AuthFormFields';

export class RegistrationPage {
    readonly fields: InputFields;
    private  readonly page:Page;
    
    public readonly backToHomepageLink: Locator;
    public readonly headerForm: Locator;
    public readonly logInlink: Locator;

    public readonly showPasswordIcon: Locator;

    public readonly passwordRules: {
    min8CharactersText: Locator; 
    lowercaseLetter: Locator;
    uppercaseLetter: Locator;
    atLeast1Number: Locator;   
    }

    public readonly confirmPaswordInput: Locator;
    public readonly showConfirmPasswordIcon: Locator;

    public readonly createAnAccountBtn: Locator;
    public readonly switchToBusinessAccountBtn: Locator;

    public readonly termsLink: Locator;




    constructor(page:Page){

        this.fields = new InputFields(page);
        this.page = page;
        this.backToHomepageLink = page.locator('.auth-header__link__text', {hasText: 'Back to Homepage'});
        this.headerForm = page.getByRole('heading', {name:'Create a personal account'});
        this.logInlink = page.getByRole('link', {name: 'Log in'});

        this.fields.passwordInput = page.getByPlaceholder('Enter password').nth(0);
        this.showPasswordIcon = page.locator('ngp-icon[role="img"][aria-hidden="true"]').nth(0);

        this.passwordRules = {
        min8CharactersText: page.getByText('Min.8 characters'),
        lowercaseLetter: page.getByText('Lowercase letter'),
        uppercaseLetter: page.getByText('Uppercase letter'),
        atLeast1Number: page.getByText('At least 1 number'),
        }

        this.confirmPaswordInput = page.getByPlaceholder('Enter password').nth(1);
        this.showConfirmPasswordIcon = page.locator('ngp-icon[role="img"][aria-hidden="true"]').nth(1);

        this.createAnAccountBtn = page.getByRole('button', {name:'Create an account'});

        this.switchToBusinessAccountBtn = page.getByRole('link', {name:"Switch to create Business account"});

        this.termsLink = page.getByRole('link', {name:"Terms of Use © Paydo Canada LTD"});

    }


    
    async clickLoginlink(){
        await this.logInlink.click()
    }

}
   



import {test} from '../../Fixtures/page-objects.fixtures'
import {expect} from '@playwright/test'
import { generateValidCredentials } from '../../Factories/E2E/authDaraFactory'


test.describe(' Login form validation', ()=> {
    test.beforeEach(async ({registrationPage, homePage}) =>{ 

        await homePage.clickOpenAccount();
        await registrationPage.clickLoginlink();
    })

    test('should sjow errors when both fields are empty', async ({loginPage}) =>{

    await loginPage.fields.emailInput.focus();
    await loginPage.page.keyboard.press('Tab');


    await expect(loginPage.fields.emailError).toBeVisible();

    await loginPage.fields.passwordInput.focus();
    await loginPage.page.keyboard.press('Tab');


    await expect(loginPage.fields.PasswordError).toBeVisible();
    await expect(loginPage.logInBtn).toBeDisabled();     


    });

    test('should show error for empty password', async ({loginPage}) => {

    const {email} = generateValidCredentials()    
    await loginPage.fields.fillEmail(email);
    await loginPage.fields.passwordInput.focus();
    await loginPage.page.keyboard.press('Tab');


    await expect(loginPage.fields.PasswordError).toBeVisible();
    await expect(loginPage.logInBtn).toBeDisabled();


    });

    test('should show error for empty email', async ({loginPage}) => {

        const {password} = generateValidCredentials();

        await loginPage.fields.fillPassword(password);
        await loginPage.fields.emailInput.focus();
        await loginPage.page.keyboard.press('Tab');


        await expect(loginPage.fields.emailError).toBeVisible();
        await expect(loginPage.logInBtn).toBeDisabled();


    })

    test('should show validation error when both fileds are filled', async ({loginPage}) => {

        const {email, password} = generateValidCredentials();

        await loginPage.fields.fillCredentials(email,password);
        await loginPage.clickLogin();

        await expect(loginPage.validationErrorMessage).toBeVisible();
        

    });

});

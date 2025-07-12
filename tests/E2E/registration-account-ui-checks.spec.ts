import {test} from '../../Fixtures/page-objects.fixtures'
import {expect} from '@playwright/test'

test.describe('registration  form UI', () => {

test('check the availability of elements on the account registration form', async ({registrationPage, homePage }) =>{
    

    //click on the Open Account button
    await homePage.clickOpenAccount();

    //check main fields in the registration account form
    await expect(registrationPage.headerForm).toBeVisible();
    await expect(registrationPage.fields.emailInput).toBeVisible();
    await expect(registrationPage.fields.emailInput).toHaveAttribute('placeholder', 'Enter email');
    await expect(registrationPage.fields.passwordInput).toBeVisible();
    await expect(registrationPage.fields.passwordInput).toHaveAttribute('placeholder', 'Enter password');
    await expect(registrationPage.confirmPaswordInput).toBeVisible();
    await expect(registrationPage.confirmPaswordInput).toHaveAttribute('placeholder', 'Enter password');

    //check icons, buttons, link
    await expect(registrationPage.showConfirmPasswordIcon).toBeVisible();
    await expect(registrationPage.createAnAccountBtn).toBeVisible();
    await expect(registrationPage.createAnAccountBtn).toBeDisabled();
    await expect(registrationPage.switchToBusinessAccountBtn).toBeVisible();
    await expect(registrationPage.termsLink).toBeVisible();

    //check required rules for password field
    const rules = registrationPage.passwordRules;
    await expect(rules.min8CharactersText).toBeVisible();
    await expect(rules.lowercaseLetter).toBeVisible();
    await expect(rules.uppercaseLetter).toBeVisible();
    await expect(rules.atLeast1Number).toBeVisible();
})
});

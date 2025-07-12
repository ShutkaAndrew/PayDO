import {test as base} from '@playwright/test'
import { RegistrationPage } from '../Pages/RegistrationAccountPage'
import { HomePage } from '../Pages/HomePage'
import { LoginPage } from '../Pages/LoginPage';

type CustomFixtures = {
    registrationPage: RegistrationPage;
    homePage: HomePage;
    loginPage: LoginPage;
};

export const test = base.extend<CustomFixtures>({
    registrationPage: async ({page}, use) => {
        const regPage = new RegistrationPage(page);
        await use(regPage);
    },

    homePage: async({page}, use) => {
        const homepage = new HomePage(page);
        await page.goto('https://paydo.com');
        await homepage.acceptCookie()
        await use(homepage);
    },

    loginPage: async ({page}, use) => {
        const regPage = new LoginPage(page);
        await use(regPage);
    },
})
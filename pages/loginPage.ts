import { CommonFun } from '../utils/CommonFun';

export class loginPage {

    static username_textbox = "//input[@name='txtUserName']";
    static password_textbox = "//input[@name='txtPassword']";
    static login_btn = "//input[@type='submit']";

    static async loginApplication(
        username: string,
        password: string
    ) {
        await CommonFun.page
            .locator(loginPage.username_textbox)
            .fill(username);

        await CommonFun.page
            .locator(loginPage.password_textbox)
            .fill(password);

        await CommonFun.page
            .locator(loginPage.login_btn)
            .click();

        console.log('Login attempted');
    }
}
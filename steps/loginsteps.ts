import { Given, When, Then } from '@cucumber/cucumber';
import { CommonFun } from '../utils/CommonFun';
import { loginPage } from '../pages/loginPage';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30 * 1000);

Given('open browser', async function () {
    await CommonFun.openbrowser();
    console.log(open browser)
});

When('Enter URL', async function () {
    await CommonFun.openURL(
        'https://sureshitacademy.in/hrms/login.php'
    );

    await CommonFun.waitsmt();
});

When('Enter the username and password', async ()=>
{
    await loginPage.loginApplication('sureshit', 'sureshit');
});

When('Logout of application', async function () {
    await CommonFun.page
        .getByText('Logout', { exact: true })
        .click();
});

Then('close browser', async function () {
    await CommonFun.closebrowser();
});

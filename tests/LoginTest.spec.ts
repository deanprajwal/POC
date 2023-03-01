import { test, expect } from '@playwright/test'
import CustomLogger from '../Logger/LoggerCustom';
import LoginPage from '../pages/LoginPage';
import ReusableFunctions from '../utlity/ReusableFunctions';


let loginPage: LoginPage;
let reusableFunction: ReusableFunctions;


test('login test', async ({ page }) => {
  test.setTimeout(120000);
  loginPage = new LoginPage(page);
  reusableFunction = new ReusableFunctions(page);
  await page.goto('https://www.saucedemo.com/');

  console.log("environment details", process.env.environMent);

  let logger = new CustomLogger();
  logger.logInfo('logger infor logged');

  await loginPage.enterUserName('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickOnLoginbtn();
})

test('login test with wrong credentials', async ({ page }) => {
  test.setTimeout(120000);
  loginPage = new LoginPage(page);
  reusableFunction = new ReusableFunctions(page);
  await page.goto('https://www.saucedemo.com/');

  console.log("environment details", process.env.environMent);

  let logger = new CustomLogger();
  logger.logInfo('logger infor logged');

  await loginPage.enterUserName('locked_out_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickOnLoginbtn();
  await page.waitForTimeout(5000);
  await page.screenshot({path:`${process.env.screenshotPath}/screenshot_${Date.now()}.png`});
})



import { Locator, Page } from "@playwright/test";

export default class LoginPage {

  private page: Page;


  constructor(page: Page) {
    this.page = page
  }

  public getUserName(): Locator {
    return this.page.locator('[data-test="username"]');
    //return this.page.locator("xpath=//input[@id='user-name']")
  }

  public getPassword(): Locator {
    return this.page.locator('[data-test="password"]');
  }

  public getLoginBtn(): Locator {
    return this.page.locator('[data-test="login-button"]');
  }

  public async enterUserName(userName: string) {
    await this.getUserName().fill(userName);
  }

  public async enterPassword(password: string) {
    await this.getPassword().fill(password);
  }

  public async clickOnLoginbtn() {
    await this.getLoginBtn().click();
  }
}
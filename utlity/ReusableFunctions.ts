import { Page } from "@playwright/test";
import defineConfig from "../playwright.config";


export default class ReusableFunctions {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public takeScreenShot() {
       
    }
}
import { Locator, Page, expect } from "@playwright/test"; // importing
import ApplicationProperties from "../dataSources/ApplicationProperties";
import LoginCredentials from "../dataSources/LoginCredentials";

export default class LoginPage { // define page class

    // pageFactory section: to locate the html page-objects needed (by below methods)
    userTxtField: Locator; // declared as type Locator (init in the constructor)
    passTxtField: Locator;
    loginBtn: Locator;

    // protected page: Page; // declare an object\variable called page as a type Page
    // constructor(page: Page) { // generate page object using input from test itself
    //     this.page = page; // init of page-object = this.page is the declared above
    //  // this.page is the local Page currently declared & page is fetched from test
    // }
    // the more elegant way to do it is:
    constructor(protected page: Page) {  
        this.userTxtField = this.page.locator('[data-test="username"]'); // init with proper input
        this.passTxtField = this.page.locator('[data-test="password"]');
        this.loginBtn = this.page.locator('[data-test="login-button"]');
    }

    // login method
    // public async signInToApp(url: string, username: string, password: string) { // define a functional-method with variables - below with defaults
    public async signInToApp(
        url = ApplicationProperties.URL_LOGIN, 
        username =  LoginCredentials.USER_IS_OK, 
        password = LoginCredentials.PASS_IS_OK) {
        // useing await, requires async!
        // await this.page.goto('https://www.saucedemo.com'); // browsing to LoginPage
        await this.page.goto(url); // browsing to URL as input var - implement while using properties
        // await this.page.locator('[data-test="username"]').fill('standard_user'); // before pageFactory added
        // await this.userTxtField.fill('standard_user'); // using pageFactory with hard-coded input
        await this.validatePageUrl(url); // using below method
        console.log('performing login')
        await this.userTxtField.fill(username); // filling text using input or default
        await this.passTxtField.fill(password);
        await this.loginBtn.click();
    }

    // validation method
    public async validatePageUrl(url: string) {
        console.log('validate url')
        await expect(this.page).toHaveURL(url, {timeout: 500});
    }

    // sleep
    public delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
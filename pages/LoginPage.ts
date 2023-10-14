import { Locator, Page, expect } from "@playwright/test"; // importing
import ApplicationProperties from "../dataSources/ApplicationProperties";
import LoginCredentials from "../dataSources/LoginCredentials";
import { LoginErrors } from "../dataSources/LoginErrors";
import { BasePage } from "./BasePage";
import test from "node:test";

export default class LoginPage extends BasePage { // page inherits from parent class!

    // pageFactory section: to locate the html page-objects needed (by below methods)
    private userTxtField: Locator; // declared as type Locator -> init in constructor
    private passTxtField: Locator; // access modifier 'private' = only set from here!
    private loginBtn: Locator; // login button
    private errorMsg: Locator; // where error displayed

    // protected page: Page; // declare an object\variable called page as a type Page
    // constructor(page: Page) { // generate page object using input from test itself
    //     this.page = page; // init of page-object = this.page is the declared above
    //  // this.page is the local Page currently declared & page is fetched from test
    // }
    // the more elegant way to do it is:
    constructor(protected page: Page) {
        super(page) // pass the costructed page to BasePage ,to be able to use its releted methods
        this.userTxtField = this.page.locator('[data-test="username"]'); // init with proper input
        this.passTxtField = this.page.locator('[data-test="password"]');
        this.loginBtn = this.page.locator('[data-test="login-button"]');
        this.errorMsg = this.page.locator('[data-test="error"]');
    }

    // login method
    // public async signInToApp(url: string, username: string, password: string) { // define a functional-method with variables - below with defaults
    public async signInToApp(
        url = ApplicationProperties.BASE_URL,
        username = LoginCredentials.USER_IS_OK,
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

    // validation method on errorMsg (using type ENUM of Key-Value, to protect the test from bad input)
    public async validatePageError(error: LoginErrors) { // the LoginErrors containing ERRORS is exportes as ENUM
        console.log('validate errorMsg')
        // await expect(this.errorMsg).toContainText(error.valueOf()); // before adding method to BasePage
        await this.validateElementsText(this.errorMsg, error.valueOf()) // passing-on the Element -&- text
    }
}
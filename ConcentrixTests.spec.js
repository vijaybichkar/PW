const { test } = require('@playwright/test');
import { LoginPage_CPTCX } from '../pageFactory/pages/LoginPage_CPTCX.js';
import { HomePage_CPTCX } from '../pageFactory/pages/HomePage_CPTCX.js';
import dotenv from "dotenv"
let page
dotenv.config({
    path: `.env.qa`,
    override: true
})
test.describe('Login and Logout application tests', () => {

    test.beforeAll('Login', async ({ browser }) => {
        await test.step("User logins using SSO ", async () => {
            const context = await browser.newContext()
            page = await context.newPage()
            await context.clearCookies()
            const loginPage = new LoginPage_CPTCX(page)
            await page.goto(process.env.BASE_URL)
            await loginPage.do_auth_login()
        })
    })
    test.afterAll('Logout', async ({ }) => {
        const homePage = new HomePage_CPTCX(page)
        await homePage.do_app_Logout()
    })
    test('CNX-123 - Check HomePage Title', async ({ }, testInfo) => {
        await test.step("User verifies Home Page Title", async () => {
            const homePage = new HomePage_CPTCX(page)
            await homePage.check_HomePageHeader()
            await testInfo.attach("Home Page Header is visible.", {
                body: await page.screenshot(),
                contentType: "image/png",
            })
        })
    })
})

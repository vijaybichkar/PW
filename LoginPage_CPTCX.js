const { LoginPageObjects } = require(process.cwd() + '//pageFactory//objectRepository//LoginPageObjects.js')
const { WebActions } = require(process.cwd() + '//lib//WebActions.js')
const loginTestData = JSON.parse(fs.readFileSync('./testConfig.json', 'utf-8'))
import fs from 'fs';
let webActions;
exports.LoginPage_CPTCX = class LoginPage_CPTCX {

    constructor(page) {
        this.page = page
        webActions = new WebActions(this.page)
    }
    loginPgObjects = new LoginPageObjects()

    async do_auth_login() {
        await webActions.enterElementText(this.loginPgObjects.HTTP_AUTH_EMAIL_INPUT, loginTestData.httpauthUsername)
        await webActions.clickElement(this.loginPgObjects.HTTP_AUTH_NEXT_BTN)
        const decryptPassword = await webActions.decryptPassword();
        await webActions.verifyElementIsDisplayed(this.loginPgObjects.HTTP_AUTH_EMAIL_INPUT)
        await webActions.enterElementText(this.loginPgObjects.HTTP_AUTH_PSWD_INPUT, decryptPassword)
        await webActions.clickElement(this.loginPgObjects.HTTP_AUTH_SUBMIT_BTN)
        await webActions.clickElement(this.loginPgObjects.HTTP_AUTH_NO_BTN)
        await webActions.clickElement(this.loginPgObjects.SIGN_OAUTH_BTN)
    }
    async do_navigateToApp() {
        await webActions.do_navigateToURL(loginTestData.url)
    }
}

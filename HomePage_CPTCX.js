const { expect } = require('@playwright/test');
const { HomePageObjects } = require(process.cwd() + '//pageFactory//objectRepository//HomePageObjects.js')
const { WebActions } = require(process.cwd() + '//lib//WebActions.js')
const { ReadActions } = require(process.cwd() + '//utils//utils.js')
let webActions;
let readActions;
exports.HomePage_CPTCX = class HomePage_CPTCX {
    constructor(page) {
        this.page = page
        webActions = new WebActions(this.page)
        readActions = new ReadActions(this.page)
    }
    homePgObjects = new HomePageObjects()
    async check_HomePageHeader() {
        const homepage_label = await readActions.readDataFromExcel("Concentrix_Validations.xlsx", "HomePageTab", 2, 2)
        await webActions.verifyElementIsDisplayed("//h2[normalize-space()='" + homepage_label + "']")
    }
    async do_app_Logout() {
        await webActions.clickElement(this.homePgObjects.LOG_OUT_OPT)
    }
}

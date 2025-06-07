// @ts-check
const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '/testdata/ui_data/ExpectedLightMode01.png',

  /* Maximum time one test can run for */
  timeout: 145 * 1000,
  expect: {
    /** Maximum time expect() should wait for the condition to be met. For eg. await expect(locator).toHaveText() */
    timeout: 9000,
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  // workers: 4,
  // testMatch: ["tests/CreateNewDeal.spec.js"],
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  // globalSetup: 'utils/global-setup.js',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    headless: false,
    ignoreHTTPSErrors: true,
    actionTimeout: 0,
    screenshot: 'off',
    video: 'on',
  },


  /* Configure projects for major browsers */
  projects: [
    {
      name: `Chrome`,
      use: {
        // Configure the browser to use.
        browserName: `chromium`,

        //Chrome Browser Config
        channel: `chrome`,

        //Picks Base Url based on User input
        // baseURL: `https://midas-qa.concentrix.com`,

        //Browser Mode
        headless: false,

        //Browser height and width
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        acceptDownloads: true,

        //Artifacts
        screenshot: `off`,
        video: `off`,
        trace: `off`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `Chromium`,
      use: {
        browserName: `chromium`,
        // baseURL: `https://midas-qa.concentrix.com`,
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `off`,
        video: `off`,
        trace: `off`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        // baseURL: `https://midas-qa.concentrix.com`,
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `off`,
        video: `off`,
        trace: `off`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    {
      name: `Edge`,
      use: {
        browserName: `chromium`,
        channel: `msedge`,
        // baseURL: `https://midas-qa.concentrix.com`,
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `off`,
        video: `off`,
        trace: `off`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `WebKit`,
      use: {
        browserName: `webkit`,
        // baseURL: `https://midas-qa.concentrix.com`,
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `off`,
        video: `off`,
        trace: `off`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `Device`,
      use: {
        ...devices[`Pixel 4a (5G)`],
        browserName: `chromium`,
        channel: `chrome`,
        headless: true,
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `off`,
        video: `off`,
        trace: `off`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `DB`
    },
    {
      name: `API`,
      use: {
        baseURL: `https://midas-qa.concentrix.com`,
      }
    }
  ],
},
)

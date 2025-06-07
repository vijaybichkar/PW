PRE-REQUISITES:

1. Installations
 - VS Code IDE (recommended)
 - Node.js app installed

2. Clone the repository to local
3. Run command npm install playwright

4. Run all tests under tests folder, use below:
    npx playwright test --project chrome
    OR 
    For a specific test, use below:
    npx playwright test CreateNewDeal.spec.js --project chrome

5. To run using tests which are tagged, use -g "@tag" command as below:
npx playwright test CreateNewDeal.spec.js --project chrome -g "@smoke"

6. To run in headed mode, use --headed as below:
npx playwright test CreateNewDeal.spec.js --project chrome --headed

7. To run the tests in a different browser say firefox, use below:
npx playwright test CreateNewDeal.spec.js --project firefox --headed

8. To encrypt the password -

    a. Rename "EncryptPassword.js" to "EncryptPassword.spec.js" 
    b. Mention the password in place of <MyPassword> on line #9 
    c. Run the file using command: npx playwright test EncryptPassword.spec.js --project chrome 
    d. The encrypted password will be displayed on the console.

9. Place the encrypted password under testConfig.json at line #6 i.e. "httpauthPassword"

10. For test cases which require db validation, the mongodb package needs to be installed using below command:
    npm install mongodb

11. For test cases which require api validation, ajv package needs to be installed using below command:
    npm install ajv 

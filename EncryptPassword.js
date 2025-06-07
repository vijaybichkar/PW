// import {test} from 'C:/Users/vijaysinh.bichkar/playwrightAutomation/pages/BasePage.js'
import CryptoJS from 'crypto-js';
const { test } = require('@playwright/test')

test('encrypt password', async ({ }) => {

        const key = "SECRET";
        //ENCRYPT
        const cipher = CryptoJS.AES.encrypt('MyPassword', key)
        console.log(cipher.toString())
        // // return CryptoJS.AES.decrypt(loginData.password,key).toString(CryptoJS.enc.Utf8)    


        // var CryptoJS = require('crypto-js');
        // var hash = CryptoJS.HmacSHA256("mypassword", "secret");
        // var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        // console.log(hashInBase64); 

})







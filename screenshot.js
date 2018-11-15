// load in puppeteer
const puppeteer = require('puppeteer');
(async () => {
// create a browser instance
const browser = await puppeteer.launch();
// create a page inside the browser
const page = await browser.newPage();
// go to the website
await page.goto('https://scrapethissite.com');
// take a screenshot and save it in the present folder
await page.screenshot({ path:'./screenshot.png'});

await browser.close();
})();

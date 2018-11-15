const puppeteer = require('puppeteer');

(async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://scrapethissite.com/pages');
        await page.pdf({path: 'make_pdf.pdf', format: 'A4'});

        await browser.close();
})();

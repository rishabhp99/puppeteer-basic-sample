const puppeteer = require('puppeteer');

(async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://scrapethissite.com/pages/forms/');

        // grabbing team data
        const teams = await page.evaluate(() => {

                const grabFromRow = (row, classname) => row
                  .querySelector(`td.${classname}`) // grab the TD
                  .innerText                        // grab the text
                  .trim()                           // remove spaces

                // defining selector
                const TEAM_ROW_SELECTOR = 'tr.team'

                // array to store data
                const data = []

                const teamRows = document.querySelectorAll(TEAM_ROW_SELECTOR)

                // looping over each team row
                for(const tr of teamRows){
                        data.push({
                          name: grabFromRow(tr, 'name'),
                          year: grabFromRow(tr, 'year'),
                          wins: grabFromRow(tr, 'wins'),
                          losses: grabFromRow(tr, 'losses')
                         })
                }

                return data
        })

        // saving the data as JSON
        const fs = require('fs')

        fs.writeFile(
                './teams.json',
                JSON.stringify(teams, null, 2)
        )

        await browser.close()

})();

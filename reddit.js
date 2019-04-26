const rp = require('request-promise');
const url = 'https://www.reddit.com';
const puppeteer = require('puppeteer');
const $ = require('cheerio');

// rp(url)
// .then(html => {
//     console.log(html)
// })
// .catch(err => console.log(err));

puppeteer
    .launch()
    .then(browser => {
    return browser.newPage();
})
.then(page => {
    return page.goto(url).then(() => {
        return page.content();
    })
        .then(html => {
            $('h2', html).each(function () {
                console.log($(this).text());

            })
        })
        .catch(err => console.log(err))
})
const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const $ = require('cheerio');


rp(url)
.then(html => {
    // success
    const wikiUrls = [];
    for (let i = 0; i < 45; i++) {
        wikiUrls.push($('big > a', html)[i].attribs.href);
    }
    console.log(wikiUrls);

})
.catch(err => {
    // handle error
});
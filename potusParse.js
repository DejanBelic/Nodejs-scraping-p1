const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/George_Washington';
const $ = require('cheerio');

/**
 * @param url
 * @returns {Promise<T | void>}
 */
const potusParse = url => {
    return rp(url)
        .then(html => {
            return {
                name: $('.firstHeading', html).text(),
                birthday: $('.bday', html).text()
            }
        })
        .catch(err => console.log(err))
};

module.exports = potusParse;
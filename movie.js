const keys = require('./env.js');
let request = require('request');

const API = `https://www.googleapis.com/customsearch/v1?key=${keys.key}&cx=${keys.id}&q=`;

function get(movieTitle) {
    request(API + movieTitle + "+site%3Aimdb.com", function(error, response, body) {
        console.log(JSON.parse(body).items[0].snippet);
    });
}

module.exports = get;


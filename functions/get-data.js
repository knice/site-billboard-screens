"use strict";

const cheerio = require("cheerio");
const request = require("request");

exports.handler = function(event, context, callback) {
  // grab the parameters from the request
  const { items } = event.queryStringParameters;

  // transform the size parameter into the image URL pattern needed in the request
  const option = {
    billboards: "https://www.ucsc.edu/index.json",
    articles: "https://news.ucsc.edu/latest.json"
  };

  // Report back to our logs
  console.log(`Fetch ${items} from ${option[items]}`);

  // Make the request to twitter and parse the response
  request(option[items], function(err, response, body) {
    if (!err && response.statusCode === 200) {
      const $ = cheerio.load(body);
      const fetchedItems = $;
      return callback(null, {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: fetchedItems
      });
    } else {
      return callback(null, {
        statusCode: 404,
        body: err
      });
    }
  });
};

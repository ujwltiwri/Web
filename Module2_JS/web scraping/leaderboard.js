const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link =
  "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link, cb);

function cb(error, request, html) {
  if (error) {
    console.log(error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const allScoreCard = document.querySelectorAll('a[data-hover="Scorecard"]');

    for (let i = 0; i < allScoreCard.length; i++) {
      let allScoreCardlink = allScoreCard[i].href;
      let completeallScoreCardlink =
        "https://espncricinfo.com/" + allScoreCardlink;
    }
  }
}

const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link =
  "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);
function cb(error, reesponse, html) {
  if (error) {
    console.log(error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const batsman = document.querySelectorAll(
      ".batsman-cell.text-truncate.out a"
    );

    //getting link for every batsman
    for (let i = 0; i < batsman.length; i++) {
      let batsmanlink = batsman[i].href;
      let completelink = "https://www.espncricinfo.com/" + batsmanlink;
      request(completelink, cb2);
    }
  }
}

function cb2(error, response, html) {
  if (error) {
    console.log(error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let playerDetails = document.querySelector(
      ".player-card-padding .player_overview-grid"
    );
    let playerh5 = playerDetails.querySelectorAll("div h5");
    let name = playerh5[0].textContent;
    let dob = playerh5[1].textContent;
    console.log("Name: ", name, " DOB: ", dob);
  }
}

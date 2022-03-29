const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link =
  "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link, cb);
function cb(error, response, html) {
  if (error) console.log(error);
  else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const player = document.querySelectorAll(
      ".match-info.match-info-MATCH.match-info-MATCH-half-width .name"
    );
    // console.log(player[0].textContent);

    const bowlertable = document.querySelectorAll(".table.bowler");
    //calculate rows for both tables
    let highestWicket = 0;
    let highestWicketTaker = "";
    for (let i = 0; i < bowlertable.length; i++) {
      let rows = bowlertable[i].querySelectorAll("tbody tr");
      //getting td for every row
      for (let j = 0; j < rows.length; j++) {
        let td = rows[j].querySelectorAll("td");
        if (td.length > 1) {
          //filter out the blank td
          let name = td[0].textContent;
          let wicket = td[4].textContent;
          if (wicket > highestWicket) {
            highestWicket = wicket;
            highestWicketTaker = name;
          }
        }
      }
    }
    console.log("Highest Number of Wickets Taken By: ", highestWicketTaker);
    console.log("No of Wickets Taken: ", highestWicket);
  }
}

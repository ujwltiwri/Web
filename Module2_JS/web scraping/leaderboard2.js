const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link =
  "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard = [];
request(link, cb);

function cb(error, response, html) {
  if (error) {
    console.log(error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    let scorecard = document.querySelectorAll('a[data-hover="Scorecard"]');

    for (let i = 0; i < scorecard.length; i++) {
      let scorecardlink = scorecard[i].href;
      let completelink = "https://www.espncricinfo.com/" + scorecardlink;
      //getting details of batsman from everymatch using scorecard's link
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
    let batsman = document.querySelectorAll(".table.batsman tbody tr");

    for (let i = 0; i < batsman.length; i++) {
      let cells = batsman[i].querySelectorAll("td");
      if (cells.length == 8) {
        let name = cells[0].textContent;
        let runs = cells[2].textContent;
        let balls = cells[3].textContent;
        let fours = cells[5].textContent;
        let sixes = cells[6].textContent;

        processPlayer(name, runs, balls, fours, sixes);
      }
    }
    console.log(leaderboard);
  }
}

function processPlayer(name, runs, balls, fours, sixes) {
  // because runs, balls, fours, sixes are string by default so if we add these then addition won't happen instead string will be concatenated
  // so we will change the data type and convert these vars from string to numbers
  runs = Number(runs);
  balls = Number(balls);
  fours = Number(fours);
  sixes = Number(sixes);

  //if player details not found in leaderboard array
  let obj = {
    Name: name,
    Innings: 1,
    Runs: runs,
    Balls: balls,
    Fours: fours,
    Sixes: sixes,
  };

  for (let i = 0; i < leaderboard.length; i++) {
    playerObj = leaderboard[i];

    //checking if player details is found in leaderboard array on basis of their name
    if (playerObj.Name == name) {
      playerObj.Innings += 1;
      playerObj.Runs += runs;
      playerObj.Balls += balls;
      playerObj.Fours += fours;
      playerObj.Sixes += sixes;
      return;
    }
  }

  leaderboard.push(obj); // Player details pushed into array if player details is not found there
}

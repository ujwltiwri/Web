const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link =
  "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(link, cb);

let leaderboard = []; //empty array of objects for storing player details
// let nofplayers = 0; //to count no of players

// let completelink[];
function cb(error, response, html) {
  if (error) {
    console.log(error);
  } else {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const allScoreCard = document.querySelectorAll('a[data-hover="Scorecard"]');

    for (let i = 0; i < allScoreCard.length; i++) {
      let allScoreCardlink = allScoreCard[i].href;
      let completelink = "https://espncricinfo.com/" + allScoreCardlink;
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
    let batsmanRow = document.querySelectorAll(".table.batsman tbody tr");
    for (let i = 0; i < batsmanRow.length; i++) {
      let cells = batsmanRow[i].querySelectorAll("td");
      if (cells.length == 8) {
        let name = cells[0].textContent;
        let runs = cells[2].textContent;
        let balls = cells[3].textContent;
        let fours = cells[5].textContent;
        let sixes = cells[6].textContent;
        processPlayer(name, runs, balls, fours, sixes);
        // nofplayers++;
      }
    }
  }
}

processPlayer("MS Dhoni", 40, 24, 45, 3);
processPlayer("MS Dhoni", 10, 34, 25, 30);
processPlayer("MS Dhonis", 10, 34, 25, 30);
console.log(leaderboard);

function processPlayer(name, runs, balls, fours, sixes) {
  // because runs, balls, fours, sixes are string by default so if we add these then addition won't happen instead string will be concatenated
  // so we will change the data type and convert these vars from string to numbers
  runs = Number(runs);
  balls = Number(balls);
  fours = Number(fours);
  sixes = Number(sixes);

  //if player's details exist for at least one time
  for (let i = 0; i < leaderboard.length; i++) {
    let playerObj = leaderboard[i]; //player object will store each player's details in key value form
    if (playerObj.Name == name) {
      playerObj.Runs += runs;
      playerObj.Innings += 1;
      playerObj.Balls += balls;
      playerObj.Fours += fours;
      playerObj.Sixes += sixes;
      return;
    }
  }

  //if player details doesn't exist in leaderboard array then save player details first
  let obj = {
    Name: name,
    Innings: 1,
    Runs: runs,
    Balls: balls,
    Fours: fours,
    Sixes: sixes,
  };

  leaderboard.push(obj); //so we pushed this object into the empty leaderboard array
}

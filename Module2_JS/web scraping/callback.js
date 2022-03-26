const fs = require("fs");
console.log("Before:");

fs.readFile("request.js", "utf-8", cb); //async "utf-8" is for encoding the file and avoiding return of buffer

function cb(error, data) {
  if (error) console.log(error, " ");
  else {
    console.log(data, " ");
  }
}

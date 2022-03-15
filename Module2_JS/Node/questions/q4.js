// read content of unorganised folder and make  an array which has extension name of each file
let fs = require("fs");
let path = require("path");
const { arrayBuffer } = require("stream/consumers");

// reading content of unorganised folder
let unorganised = path.join(__dirname, "..", "Unorganised");
console.log(unorganised);

let read = fs.readdirSync(unorganised);
console.log(read);
let extarr = [];

for (let i = 0; i < read.length; i++) {
  let filename = path.extname(read[i]);
  extarr.push(filename); // push array method to push values into the array
}

console.log(extarr);

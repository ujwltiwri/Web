//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let path = require("path");
let fs = require("fs");

// new folder created
let newfolder = path.join(__dirname, "question1");
if (!fs.existsSync(newfolder)) fs.mkdirSync(newfolder);

//new file created in the question1 folder
let file = path.join(__dirname, "question1", "q1original.txt");
fs.writeFileSync(file, "This is The Original File");

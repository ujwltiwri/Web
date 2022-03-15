//move a file
let path = require("path");
let fs = require("fs");

let srcpath = path.join(__dirname, "..", "file.txt");
console.log(srcpath);
let destpath = path.join(__dirname, "..", "questions", "question1", "file.txt");
console.log(destpath);
fs.copyFileSync(srcpath, destpath);

//delete the file
fs.unlinkSync(srcpath);

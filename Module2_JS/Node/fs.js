const { Console } = require("console");
let fs = require("fs");
const { dirname } = require("path");

let path = require("path");

let filePath = __dirname;
// console.log("Returns File Path: " + filePath);

let newFile = path.join(filePath, "name.txt");

// CRUD
// 1 -> Create
// creating a new file and writing into it
// It Creates a new file if it does not exists else overrides the file
fs.writeFileSync(newFile, "1-> Again Writing on This Existing File");

// 2 -> Read
let readFile = fs.readFileSync(newFile, "utf-8");
console.log(readFile);

// 3 -> Update
let updateFile = fs.appendFileSync(
  newFile,
  "\n2-> Updated This File using AppendFile Function"
);

console.log(fs.readFileSync(newFile, "utf-8"));

// 4 -> Delete

// let deletefile = fs.unlinkSync(newFile);

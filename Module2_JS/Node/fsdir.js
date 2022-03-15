const { Console } = require("console");
let fs = require("fs");
let path = require("path");

console.log(__dirname);

let newpath = path.join(__dirname, "newpath");

// create directory
if (!fs.existsSync(newpath)) fs.mkdirSync(newpath);

// read directory
console.log(fs.readdirSync(__dirname));

//delete directory
// fs.rmdirSync(newpath, { recursive: true });

// copy directory
let sourcepath = path.join(__dirname, "name.txt");
let destinationpath = path.join(__dirname, "CustomModule", "name.txt");
fs.copyFileSync(
  path.join(__dirname, "name.txt"),
  path.join(__dirname, "CustomModule", "name.txt")
);

let fs = require("fs");
const { dirname } = require("path");

let path = require("path");

let filePath = __dirname;

let newFile = path.join(__dirname, "name.txt");

// creating a new file and writing into it
fs.writeFileSync(newFile, "Hello From My Side");

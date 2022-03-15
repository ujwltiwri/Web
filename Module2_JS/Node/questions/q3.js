//copy index.html file from module1 to a new folder inside module2 having name html.
let path = require("path");
let fs = require("fs");

// (..) Double Dot Means going back to one folder
//getting source path
let srcPath = path.join(__dirname, "..", "..", "..", "Module 1", "index.html");
console.log(srcPath);
//getting destination path
let destPath = path.join(__dirname, "..", "..", "index.html");
console.log(destPath);

//copying file from index.html Module1 to Module2

fs.copyFileSync(srcPath, destPath);

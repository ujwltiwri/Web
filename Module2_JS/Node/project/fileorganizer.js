let fs = require("fs");

let folderpath = process.argv[2]; //showing folder path at 2nd index in this array

// console.log(folderpath);
if (fs.existsSync(folderpath)) {
  let files = fs.readdirSync(folderpath);
  console.log(files);
} else {
  console.log("Please Enter a Valid Path!!!!!!!!!");
}

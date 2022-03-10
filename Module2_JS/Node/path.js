// "C:\Users\tiwar\Desktop\Pep\FJP6\Web\Module2_JS\Node\path.js";

let path = require("path"); // means we are requiring path module provided by node
// console.log(path);

let extensionName = path.extname(
  "C:Users\tiwarDesktopPepFJP6WebModule2_JSNodepath.js"
);
console.log(extensionName);

// Base Name returns file name
let baseName = path.basename(__filename);
console.log(baseName);

// To get Directory Path
let dirPath = __dirname;
console.log(dirPath); // __ -> it is underscore 2 times

// To get file path
console.log(__filename);

// To make a new file
let newfilePath = path.join(dirPath, "new.js");
console.log(newfilePath);

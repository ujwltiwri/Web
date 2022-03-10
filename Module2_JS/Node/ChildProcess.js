// Child Process is used to run other files from this file using Node
let cp = require("child_process"); // it is an object and returns obj and functions
console.log(cp);

// To Run VS CODE App of OS in my example of Windows
// cp.execSync("code");
// cp.execSync("calc"); //Opens Calculator

// Run Different file
let content = cp.execSync("node test.js"); // opens a new terminal and executes the code written here in terminal and shows us the output
console.log(content); // returns data in binary form by default
//so this data should be converted to string = console.log(""+var);
console.log("" + content);
console.log("Output From test.js File: " + content);

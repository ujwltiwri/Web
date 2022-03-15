// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let path = require("path");
let fs = require("fs");
let newfolder = (__dirname, "question2");
if (!fs.existsSync(newfolder)) fs.mkdirSync(newfolder);

let arr = [
  "audio",
  "video",
  "image",
  "software",
  "documents",
  "applications",
  "other",
];

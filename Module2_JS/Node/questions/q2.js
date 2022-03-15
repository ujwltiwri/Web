// given an array arr=[audio,video,image,software,documents,applications,other]
// make folder for each element in the given array and inside each folder make 4 files of that type

let path = require("path");
let fs = require("fs");

let arr = [
  "audio",
  "video",
  "image",
  "software",
  "documents",
  "applications",
  "other",
];

let nameArr = ["name", "efg", "jkl", "xyz"];
let extArr = [".mp3", ".mp4", ".jpg", ".exe", ".docx", ".apk", ".zip"];
let organised = (__dirname, "organised");
// if (!fs.existsSync(organised)) fs.mkdirSync(organised);

//making folders from arr variable
for (let i = 0; i < arr.length; i++) {
  let filespath = path.join(organised, arr[i]);
  if (!fs.existsSync(filespath)) {
    fs.mkdirSync(filespath);
  }

  //for making 4 files in each folder
  for (let j = 0; j < nameArr.length; j++) {
    let filename = nameArr[j] + extArr[i];
    let eachFilePath = path.join(filespath, filename);
    fs.writeFileSync(eachFilePath, filename, "");
  }
}

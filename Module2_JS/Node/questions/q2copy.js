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
  "applicationss",
  "other",
];

let folder = ["abc", "def", "xyz", "names"];
let files = [".mp3", ".mp4", ".jpg", ".exe", ".docx", ".apk", ".zip"];

let organisedcp = path.join(__dirname, "oragnisedcp");
if (!fs.existsSync(organisedcp)) {
  fs.mkdirSync(organisedcp);
}

//loop to make folders for each element
for (let i = 0; i < arr.length; i++) {
  let mainfolder = path.join(organisedcp, arr[i]);
  if (!fs.existsSync(mainfolder)) fs.mkdirSync(mainfolder);

  //inner loop for making 4 folders in each folder
  for (let j = 0; j < folder.length; j++) {
    let filename = folder[j] + files[i];
    let eachFilePath = path.join(mainfolder, filename);
    fs.writeFileSync(eachFilePath, "");
  }
}

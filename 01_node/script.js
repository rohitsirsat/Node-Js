const fs = require("node:fs");

// Task: read the content of notes.txt file

console.log("Start fo Script");

// Sync ==> Blocking operation
// const content = fs.readFileSync("notes.txt", "utf-8");
// //
// console.log("Content got: ", content);

// [Async] => non-blocking code
fs.readFile("notes.txt", "utf-8", function (error, data) {
  if (error) console.log(error);
  else console.log("Content got: ", data);
});

console.log("End of Script");

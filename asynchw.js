var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
 if (err) return console.error(err);
 console.log(data.toString());
 console.log("End reading file");
 console.log("Begin appending file");
 fs.appendFile("input.txt", "I am appending a file. ", function (err, data) {
  if (err) return console.error(err);
  console.log("End appending file");
  console.log("Begin re-reading file");
  fs.readFile('input.txt', function (err, anotherData) {
   if (err) return console.error(err);
   console.log(anotherData.toString());
   console.log("Finish re-reading file");
  });
 });
});
console.log("Begin reading file");
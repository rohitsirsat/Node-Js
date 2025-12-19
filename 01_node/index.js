const fs = require("node:fs"); //(new things in node just to specify that it is built in module)

const content = fs.readFileSync("notes.txt", "utf-8");

// console.log(content);

// writeFileSync (overwrite the content of file)
fs.writeFileSync("copy.txt", content, "utf-8");

fs.appendFileSync("copy.txt", "\nno overwritten", "utf8");

fs.mkdirSync("games/xyz/a", { recursive: true });

fs.rmdirSync("games/xyz/a"); // remove a
fs.rmdirSync("games/xyz"); // remove xyz
fs.rmdirSync("games"); // remove games

fs.unlinkSync("copy.txt");

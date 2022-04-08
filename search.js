const search = require("./JavaScript/Searcher.js");

const bios = [];
const words = [];

async function searchs() {
  let users = await search("@");

  users.forEach((user) => {
    bios.push(user.Bio);
  });

  bios.forEach((bio) => {
    bio.split(" ").forEach((word) => {
      words.push(word);
    });
  });
}

async function returns() {
  await searchs();
  console.log(words);
}
returns();

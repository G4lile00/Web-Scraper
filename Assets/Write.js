const fs = require("fs");

const add = require('./Controllers/add')

const remove = require('./Controllers/remove')

add()

remove()

function write(data) {
  dataj = JSON.stringify(data);

  let stream = fs.createWriteStream("./Data/data.json");

  stream.once("open", function (fd) {
    stream.write(dataj);

    stream.end();
  });
}

write(info)

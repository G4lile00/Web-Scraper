const fs = require("fs");


module.exports = function write(data) {
  dataj = JSON.stringify(data);

  let stream = fs.createWriteStream("./Data/data.json");

  stream.once("open", function (fd) {
    stream.write(dataj);

    stream.end();
  });
}


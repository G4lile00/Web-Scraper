const fs = require("fs");

module.exports = function write(data) {
  let stream = fs.createWriteStream("./Data/data.txt");

  let datas = data.join("\n");

  stream.once("open", function (fd) {
    stream.write(datas);

    stream.end();
  });
};

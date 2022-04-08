const fs = require("fs");

module.exports = function write(data) {
  let stream = fs.createWriteStream("./Data/data.txt", { flags: "a" });

  let datas = data.join("\n");

  stream.once("open", function (fd) {
    stream.write("\n" + datas);

    stream.end();
  });
};

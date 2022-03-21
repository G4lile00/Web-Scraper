const fs = require("fs");



module.exports = function add(name, birth) {

  data = fs.readFileSync("./Data/data.json", 'utf8');
  
  infoj = JSON.parse(data);

  infoj.name.push(name)
  infoj.birth.push(birth)


  info = infoj
}


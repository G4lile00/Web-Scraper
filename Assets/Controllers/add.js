const fs = require("fs");



module.exports = function add(name, nickname, birth, email, phone, insta) {

  data = fs.readFileSync("./Data/data.json", 'utf8');
  
  infoj = JSON.parse(data);

  infoj.name.push(name)
  // infoj.nickname.push(nickname)
  infoj.birth.push(birth)
  // infoj.email.push(email)
  // infoj.phone.push(phone)
  // infoj.insta.push(insta)

  info = infoj
}


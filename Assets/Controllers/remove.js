const fs = require('fs')

const search = require('./Search')

const write = require('/home/g4lile0/Code/Database/Assets/Write.js')

module.exports = function remove(name) {

    if(typeof name !== 'undefined'){
    data = fs.readFileSync("/home/g4lile0/Code/Database/Assets/Data/data.json", 'utf8');
    
    infoj = JSON.parse(data);

    search(infoj, name)
    
    infoj.name.splice(index, 1) 
    // infoj.nickname.splice(index, 1)
    infoj.birth.splice(index, 1)
    // infoj.email.splice(index, 1)
    // infoj.phone.splice(index, 1)
    // infoj.insta.splice(index, 1)

    info = infoj
    }
}


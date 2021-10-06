const fs = require('fs');

module.exports = function read(path) {

try {
 data = fs.readFileSync(path, 'utf8');
} catch (err) {
    console.log(err);
} 
json = JSON.parse(data)

};



const read = require('./Read')

const search = require('./Search')

function display(data, index) {

    var template = {
        "Nome":data.name[index],
        "Aniversario":data.birth[index]
    
    }
    
    
 console.log(template)
        
}


read('./Data/data.json')

search(json,"Ana")

display(json, index)
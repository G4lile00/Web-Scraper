const read = require('./Controllers/Read')

const search = require('./Controllers/Search')

function display(data, index) {

    var template = {
        "Nome":data.name[index],
        "Apelido":data.nickname[index],
        "Aniversario":data.birth[index],
        "E-mail":data.email[index],
        "Telefone":data.phone[index],
        "Instagram":data.insta[index]
    
    }
    
    
 console.log(template)
        
}


read('./Data/data.json')

search(json,"anderson")

display(json, index)
const fs = require('fs')

myfolder = "./pastateste"

if(!fs.existsSync(myfolder)){
    console.log("Não existe.");
    fs.mkdirSync("pastateste")
} 
else if(fs.existsSync(myfolder)){
    console.log("Existe");
}
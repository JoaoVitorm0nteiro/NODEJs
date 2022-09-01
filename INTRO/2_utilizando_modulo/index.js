const fs = require('fs'); //import no modulo File System

fs.readFile('arquivo.txt', 'utf8', (err, data) =>{
    if(err){
        console.log(err);
    }
    console.log(data);
});
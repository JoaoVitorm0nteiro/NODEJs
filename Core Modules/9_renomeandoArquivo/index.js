const fs = require('fs')

const arqantigo = 'arquivo.txt'
const arqnovo = 'novoarquivo.txt'

fs.rename(arqantigo, arqnovo, function(err){
    if(err){
        console.log(err);
    }
    console.log('arquivo renomeado');
})
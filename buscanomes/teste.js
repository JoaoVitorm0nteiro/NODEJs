    const fs = require('fs');
    const StrNomes = `
joao vitor
teste1
teste2
teste3
teste4
grazi
teste5
teste8
lucas
davi
`
    const StrlistaFuncs = `
teste1
grazi
teste2
teste3
teste4
joao vitor
lucas
davi
`
    const arrayNomes = StrNomes.split('\n').filter(Boolean);
    const arrayListaFuncs = StrlistaFuncs.split('\n').filter(Boolean);

    let nomes = '';
    for(let j=0; j<arrayNomes.length; j++){
        for(let i = 0; i<arrayListaFuncs.length; i++){
            if(arrayNomes[j] === arrayListaFuncs[i]){
                nomes += ("\n" + arrayListaFuncs[i])
                break;
            }
        }
    }
fs.writeFile('nomes.txt', nomes, (err)=>{
    if (err) {
        console.log(err);
    }
});

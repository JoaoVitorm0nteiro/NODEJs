    const fs = require('fs');
    const StrNomes = `
`
    const StrlistaFuncs = `
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
    if (err) 
        console.log(err);
    else{
        console.log('Arquivo gerado com sucesso !');
    }
});

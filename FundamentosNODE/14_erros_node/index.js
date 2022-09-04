/* const x = 10;

if(!Number.isInteger(x)){
    throw new Error('Não é um numero inteiro.')//se cair no throw encerra o programa
}

console.log('Continuando o codigo . . .'); */

const y = 10;

try{
    y = 2
}catch(err){
    console.log(`Error. ${err}`);
}
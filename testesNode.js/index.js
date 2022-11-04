//modulos
const fs = require('fs');
const abc = 'abcdefghijklmnopqrstuvwxyz';
let string = ''; 

//estrutura de repetição
for(let i = 0; i<=5; i++){
string += abc.charAt((Math.floor(Math.random() * abc.length))); 
}

fs.writeFileSync('string.txt', string);

//console.log();



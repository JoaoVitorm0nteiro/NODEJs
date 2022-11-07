const fs = require ('fs')

const Main = () => {
const teste = `
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
const teste2 = `
teste1
grazi
teste2
teste3
teste4
joao vitor
lucas
davi
`
//convertendo as strings para array
const array1 = teste.split('\n').filter(Boolean);
const array2 = teste2.split('\n').filter(Boolean);

let array = [];
let j = 0;

const filtro = (i = 0) => {
    while(i<array2.length){
        if(array1[j] === array2[i]){
            array.push(array2[i])
        }
        i++;
    }
    if(j<array1.length){
        j++
        filtro()
    }
}
filtro();
fs.writeFileSync('Nomes.txt', array.toString());
}

Main();
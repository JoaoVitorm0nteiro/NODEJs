const teste = `
joao vitor
pedro
maria
`
const teste2 = `
joao vitor
lucas
grazi
`

let i = [];

const array1 = teste.split('\n').filter(Boolean);
const array2 = teste2.split('\n').filter(Boolean);

if(array1[0]===array2[0]){
    i.push(array1[0])
} 
console.log(i);
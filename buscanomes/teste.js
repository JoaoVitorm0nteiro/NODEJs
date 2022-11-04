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

const array1 = teste.split('\n').filter(Boolean);
const array2 = teste2.split('\n').filter(Boolean);
console.log(`${array1}`)
console.log(`${array2}`);
console.log(array1[0] === array2[0]);
 
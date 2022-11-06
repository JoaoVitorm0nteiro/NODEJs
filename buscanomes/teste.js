const teste = `
joao vitor
teste1
teste2
teste3
testa4
grazi
`
const teste2 = `
teste1
grazi
teste2
teste3
teste4
joao vitor
teste5

`
let i = 0;
let j = 0;
let verificador = false;

let array = [];

const array1 = teste.split('\n').filter(Boolean);
const array2 = teste2.split('\n').filter(Boolean);

const filtro = () => {
    while(i<array2.length){
        if(array1[j] === array2[i]){
            array.push(array2[i])
            !verificador;
            break;
        }
        i++;
    }
}

filtro();

if(verificador == true){
    i=0;
    j++;
    !verificador;
    filtro();
}
console.log(i);
console.log(array);
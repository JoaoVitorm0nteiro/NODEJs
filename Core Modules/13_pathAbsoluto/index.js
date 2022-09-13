const path = require('path')

//path absoluto

// console.log(path.resolve('teste.txt'));

//formar path

const midfolder = "relatorios"
const fileName = "user.txt"
const finalpath = path.join("/", 'arquivos', midfolder, fileName)

console.log(finalpath);
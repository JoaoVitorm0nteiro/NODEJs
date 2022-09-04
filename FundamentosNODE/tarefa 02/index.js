const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    { name:'nome',  message:'Insira seu nome: '},
    { name:'idade',  message:'Insira sua idade: '}
]).then((resposta)=>{
    if(!resposta.nome || !resposta.idade){
        throw new Error('Nome e idade sao obrigatorios.')
    }
    console.log(chalk.bgYellow.black`Seu nome é: ${resposta.nome} e sua idade ${resposta.idade}`);
}).catch((err)=>console.log(err))
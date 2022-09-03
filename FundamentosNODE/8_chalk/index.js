const chalk = require('chalk')
const nota = 5;

if(nota>=7){
    console.log(chalk.green('Parabéns você está aprovado.'));
}else{
    console.log(chalk.bgCyanBright.bold('Você não foi aprovado.'));
}
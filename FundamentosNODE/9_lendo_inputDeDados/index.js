const chalk = require('chalk')
const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})
readline.question('O que você está estudando no momento ? ', (resposta) => {
    console.log(chalk.green`${resposta}`);
    readline.close()
})


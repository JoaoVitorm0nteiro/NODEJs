const inquirer = require('inquirer')
const chalk = require('chalk')

const init_menu = () => {
    inquirer.prompt([{
        name: 'choice',
        type: 'list',
        message: 'O que deseja fazer ?',
        choices: [
            'Conversor de temperatura',
            'Calculadora de média aritmetica',
            'Sair'
        ]
    }]).then((answer)=>{
        const choice = answer['choice']
        if(choice === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar nosso sistema.'));
            process.exit()
        }

    }).catch(err=>{
        console.log(err.message);
    })
}

init_menu();
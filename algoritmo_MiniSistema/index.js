const inquirer = require('inquirer')
const chalk = require('chalk')

const init_menu = () => {
    inquirer.prompt([
        {
        name: 'choice',
        type: 'list',
        message: 'O que deseja fazer ?',
        choices: [
            'Conversor de temperatura',
            'MediaAritmetica',
            'Sair'
        ]
    }
]).then((answer)=>{
        const choice = answer['choice']
        if(choice === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar nosso sistema.'));
            process.exit()
        } else if (choice === 'Conversor de temperatura'){
           
        } else if (choice === 'MediaAritmetica'){
           media();
        }

    }).catch(err=>{
        console.log(err.message);
    })
}

//prompt para as notas da media
const media = () =>{
     inquirer.prompt([
        {
        name:'media1',
        type:'number',
        message:'Digite sua primeira nota: '
    },
    {
        name:'media2',
        type:'number',
        message:'Digite sua segunda nota: '
    }
    ]).then((notas)=>{
        const media = parseFloat((notas.media1 + notas.media2)/2)
        console.log(`Sua média é: ${media}`);

    }).catch((err)=>{
        console.log(err.message);
    })
}

init_menu();
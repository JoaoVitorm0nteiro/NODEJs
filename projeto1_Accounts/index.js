//modulos externos
const inquirer = require ('inquirer')
const chalk = require ('chalk')

//modulos internos
const fs = require ('fs')

 function operation(){
    inquirer.prompt([{
        type: 'list',
        name:'action',
        message: 'o que você deseja fazer ?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }]).then((answer)=>{
        const action = answer['action']
        
        if(action === 'Criar conta'){
            createAccount();
            buildaccount();
        }
               //teste -> console.log(action);

    }).catch(err => console.log(err.message))  
 }

//createAccount
const createAccount = () =>{
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco"));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));
}

const buildaccount = () =>{
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Defina um nome para sua conta: ',


        }
    ]).then((answer)=>{
        const accountName = answer['accountName']
        console.info(accountName)

        if(!fs.existsSync('account')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta ja existe, escolha outro nome !'));
            buildaccount()
       
        }
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (err)=>{
            console.log(err.message);
        },
        )

        console.log(chalk.green('Parabéns sua conta foi criada'));
        operation()
        return
    }).catch(err =>{
        console.log(err.message);
    })
}


 operation();
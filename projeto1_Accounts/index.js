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
        } else if(action === 'Depositar') {
            deposito()
        } else if (action === 'Consultar Saldo'){

        } else if (action === 'Sacar'){

        } else if (action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o accounts.'));
            process.exit()
        }
               //teste -> console.log(action);

    }).catch(err => console.log(err.message))  
 }

//createAccount
const createAccount = () =>{
    console.log(chalk.bgGreen.black("Parabéns por escolher o nosso banco"));
    console.log(chalk.green('Defina as opções da sua conta a seguir'));
}

//build account
const buildaccount = () =>{
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Defina um nome para sua conta: ',


        }
    ]).then((answer)=>{
        const accountName = answer['accountName']
        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta ja existe, escolha outro nome !'));
            buildaccount()
            return
       
        }
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (err)=>{
            console.log(err.message);
        },
        )

        console.log(chalk.green('Parabéns sua conta foi criada'));
        operation()
        
    }).catch(err =>{
        console.log(err.message);
    })
}

//função deposito
function deposito(){

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ]).then((answer)=>{
        const accountName = answer['accountName'];
        //verifica se a conta existe        
        if(!checkAccount(accountName)){
            return deposito()
        }

        inquirer.prompt([
            {
                name:'amount',
                message:'Quanto você deseja depositar ?'
            }
    ]).then((answer)=>{

        const amount = answer['amount']

        //add amount
        addAmount(accountName, amount);
        operation();

    }).catch(err => console.log(err))

    }).catch()
}

function checkAccount (accountName){

    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe, digite um nome valido.'));    
        return false
    }
    return true
}

function addAmount(accountName, amount){

    const account = getAccount(accountName)
    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarder'))
        return deposito()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
    
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
            console.log(err);
        }
    )
    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`));

    console.log(account);

}

function getAccount(accountName){
    const accountJSON =  fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flar: 'r'
    })

    return JSON.parse(accountJSON)
}


 operation();


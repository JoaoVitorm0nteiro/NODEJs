const inquirer = require ('inquirer')
//algoritmo para gerar CPF

inquirer.prompt([
    {
        name:'estadoOrigem',
        type:'list',
        message:'Escolha o estado de emissão',
        choices:[
            'DF','GO','MS',
            'MT','TO',/*1*/'AC',
            'AM','AP','PA',
            'RO','RR',/*2*/'CE',
            'MA','PI',/*3*/'AL',
            'PB','PE','RN',/*4*/
            'BA','SE',/*5*/'MG',/*6*/
            'ES','RJ',/*7*/'SP',/*8*/
            'PR','SC',/*9*/'RS'/*0*/
        ]
    }
]).then((answer)=>{
    const estadoOrigem = answer['estadoOrigem']
    let nonoDigito = 0;
    

   
}).catch((err)=>{
    console.log(err.message);
})
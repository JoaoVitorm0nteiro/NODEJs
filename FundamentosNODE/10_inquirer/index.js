const inquirer = require ('inquirer')
inquirer.prompt([
    {
    name: 'p1',
    message: 'Qual sua primeira nota ?'
    },
    {
    name:'p2',
    message:'Qual sua segunda nota ?'
    }
]).then((notas)=>{
    const media = (parseInt(notas.p1) + parseInt(notas.p2)) / 2
    console.log(`A média é: ${media}`);
}).catch((err)=>{
    console.log(err);
})

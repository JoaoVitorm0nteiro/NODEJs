const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodemysql2',
})

conn.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Conectado ao Banco !');
    }
})

const sql = 'DELETE FROM Livros WHERE pageqty >= 0'
conn.query(sql, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('operação feita com sucesso');
    }
})
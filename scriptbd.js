//tentativa de criar uma table em um bd sem digitar no workbench

const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'teste',
    database: 'nodemysql2',
})

conn.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Conectado!');
    }
})

const query = ' CREATE TABLE Livros (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, Titulo VARCHAR(255), Autor VARCHAR(255));'
conn.query(query, function (err) {
    if (err) {
        console.log(err);
    }else{
        console.log('Dados inseridos');
    }
})
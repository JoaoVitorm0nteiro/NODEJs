const express = require ('express');
const exphbs = require ('express-handlebars');
const mysql = require ('mysql');
const port = 3000;

const app = express ()

app.use (
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('login')
})

app.listen(port, ()=>{
    console.log(`Serviço executando na porta: ${port}`);
})


//conexão com o banco 
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'logintest',
})

conn.connect((err) => {
    if(err){
        console.log(err);
    }

    console.log('Conexão estabelecida com sucesso.');
})

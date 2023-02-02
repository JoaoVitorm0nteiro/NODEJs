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

//add um post aqui para efetuar o login


app.get('/cadaster', (req,res)=>{
    res.render('add_users')
})

app.post('/add/users', (req,res)=>{

    const name = req.body.name;
    const user = req.body.user;
    const password = req.body.password;

    const query = `INSERT INTO usuarios (nome, user_name, senha) VALUES ('${name}', '${user}', '${password}');`

    conn.query(query, function (err) {
        if(err){
            console.log(err);
        }else{
            console.log("Dados gravados com sucesso");
            res.redirect('/')
        }
    })

})



app.listen(port, ()=>{
    console.log(`Serviço executando na porta: ${port}`);
})


//conexão com o banco 
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'teste',
    database: 'loginteste',
})

conn.connect((err) => {
    if(err){
        console.log(err);
    }

    console.log('Conexão estabelecida com sucesso.');
})

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

//render da pagina inicial
app.get('/', (req,res)=>{
    res.render('login')
})

//post LOGIN
app.post('/log', (req, res)=>{

    const user = req.body.user;
    const password = req.body.password;

    const query = `SELECT * FROM usuarios WHERE user_name = '${user}' AND senha = '${password}'   ;`

    conn.query(query, function(err, data){
        if(data.length>0){
            console.log('Usuario Logado');
            res.render('logado')
        }else{
            console.log('Usuario nao registrado');
            res.render('wrongpass')
        }
    })

})

//render tela de cadastro
app.get('/cadaster', (req,res)=>{
    res.render('add_users')
})

//post cadastro de usuarios
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

//render usuarios cadastrados
app.get('/users', (req,res)=>{
    const query = `SELECT id, nome, user_name FROM usuarios`
    conn.query(query, function(err, data){
        if(err){
            console.log(err);
            return
        }
        const users = data;
        res.render('users', { users })
    })
})

//delete usuarios cadastrados
app.post('/users/delete/:id', (req,res)=>{
    const id = req.params.id;
    const query = `DELETE FROM usuarios WHERE id = ${id}`

    conn.query(query, function(err){
        if(err){
            console.log(err);
            return
        }else{
            console.log('Usuario removido com sucesso');
            res.redirect('/users')
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

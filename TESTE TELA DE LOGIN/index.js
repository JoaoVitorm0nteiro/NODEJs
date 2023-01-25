const express = require ('express');
const exphbs = require ('express-handlebars');
const mysql = require ('mysql');
const port = 3000;

const app = express();

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json()) ;

//iniciando o handlebars (?)
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//renderizando a pagina home
app.get('/', (req,res)=>{
    res.render('home');
})

app.post('/cadastro/users', (req,res)=>{
    const email = req.body.email;
    const senha = req.body.password;

    const query = `INSERT INTO user (email, senha) VALUES ('${email}','${senha}')`;
    conn.query(query, function (err){
        if (err){
            console.log(err);
        }
        console.log(`Email: ${email} e senha: ${senha}`);
        res.redirect('/');
    });


})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'logintest',
});

conn.connect((err) => {
    if(err){
        console.log(err);
    }

    console.log('Conexão estabelecida com sucesso.');

        app.listen(port, ()=>{
        console.log(`serviço executando na porta: ${port}`);
    }) 
})

const express = require ('express')
const exphbs = require ('express-handlebars')
const mysql = require ('mysql')
const port = 3000;

const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home')  
})

app.post('/books/insertbook', (req, res)=>{
    const title = req.body.title;
    const Autor = req.body.Autor;

    const query = `INSERT INTO Livros (Título, Autor) VALUES ('${title}', '${Autor}');`

    conn.query(query, function (err){
        if (err){
            console.log(err);
        }
        res.redirect('/estante');

    })

})

app.get('/estante',(req,res)=>{
    const QUERY = 'SELECT * FROM Livros;'

    conn.query(QUERY, function(err, data){
        if(err){
            console.log(err);
            return
        }   
            const books = data
            console.log(books);
            res.render('estante', { books })
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2',
})

conn.connect((err) => {
    if(err){
        console.log(err);
    }

    console.log('Conexão estabelecida com sucesso.');

    app.listen(port, ()=>{
        console.log(`serviço executando na porta: ${port}`);
    })
})
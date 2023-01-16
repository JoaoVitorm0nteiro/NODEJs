const express = require ('express')
const exphbs = require ('express-handlebars')
const mysql = require ('mysql')
const port = 3000;

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home')  
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

    console.log('conectado');

    app.listen(port)
})
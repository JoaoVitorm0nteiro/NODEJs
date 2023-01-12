const express = require ('express');
const exphbs = require ('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req,res)=>{

    const list = ["Item 1", "Item 2", "Item 3"]

    res.render('dashboard', {list})
})

app.get('/', (req,res)=>{
    
const user = {
    name: 'João Vitor',
    surname: "Monteiro",
    age: "21",  
    course: "ADS"

}

const palavra = 'teste';


const auth = true;

    res.render('home', {user: user, palavra, auth})
})

app.listen(port, ()=>{
    console.log(`Serviço executando na porta: ${port}`);
})
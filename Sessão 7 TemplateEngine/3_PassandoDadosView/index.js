const express = require ('express');
const exphbs = require ('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req,res)=>{
    
const user = {
    name: 'João Vitor',
    surname: "",
    age: "21",
    course: "ADS"

}

    res.render('home', {user: user})
})

app.listen(port, ()=>{
    console.log(`Serviço executando na porta: ${port}`);
})
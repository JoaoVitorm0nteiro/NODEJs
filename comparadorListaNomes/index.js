const express = require("express");
const exphbs = require ("express-handlebars");


const port = 3000;
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home', {layout:false})
})

app.post('/lista', (req,res)=>{
    res.redirect('/nomes')
})

app.listen(port, ()=>{
    console.log(`Rodando na porta: ${port}`);
});